const mysql = require('mysql');

// Connection details
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'capstone330',
  database: 'projects',
});

// Connect to database
connection.connect(function (err, columns) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

// External function to be called from server.js
async function query(cols, majors, multi) {
  // Creates parameterized query string
  const query = buildQueryString(cols, majors, multi);

  let data = [];
  cols.forEach(col => data.push(Object.keys(col)[0]));
  // Adds each selected major to the list of parameters for query unless all majors are requested
  if (!majors.includes('All Majors')) {
    majors.forEach(major => {
      data.push('%' + major + '%');
    });
  }
  console.log('data');
  console.log(data);

  // Executes query string
  const queryArr = await executeQuery(query, data);

  return queryArr;
}

// Appends column specifications to query string
function appendSpecificationString(cols) {
  // Gets rid of columns where no specification was included
  const columns = cols.filter(col => Object.values(col)[0] !== '');

  if (columns.length === 0) {
    return '';
  } else {
    let userSpecification = '(';
    columns.forEach((col, index) => {
      const key = Object.keys(col)[0];
      // Gets string representation of multiple specifications
      const strValue = Object.values(col)[0];
      // Splits specification string into array of specifications
      const valuesArr = strValue.split(',').map(value => value.trim());

      valuesArr.forEach((value, index) => {
        userSpecification += `${key} LIKE '%${value}%'`;
        if (index < valuesArr.length - 1) {
          userSpecification += ' OR ';
        }
      });

      if (index < columns.length - 1) {
        userSpecification += ' AND ';
      }
    });
    userSpecification += ')';
    return userSpecification;
  }
}

function appendMultidisciplinary(multi) {
  // Filters results based on multidisciplinary preference
  if (multi === 'exclude') {
    // Filter out multidsciplinary results
    return " AND `Project_Categories` NOT LIKE '%Multidisciplinary%'";
  } else if (multi === 'only') {
    // Filter out non-multidsciplinary results
    return " AND `Project_Categories` LIKE '%Multidisciplinary%'";
  } else {
    return '';
  }
}

// Creates SQL query statement to be executed
function buildQueryString(cols, majors, multi) {
  let query = 'SELECT ';

  // Adds one placeholder for each specified column
  cols.forEach(() => {
    query += '??, ';
  });

  // Removes trailing ', ' from last placeholder
  query = query.slice(0, -2);

  // Database table selection
  query += ' From `projects`';

  const specification = appendSpecificationString(cols);

  // Continues query if majors are specified
  if (majors.includes('All Majors') && specification === '') {
    query += appendMultidisciplinary(multi);
    console.log(query);
    return query;
  } else if (majors.includes('All Majors')) {
    query += ' WHERE ' + specification;
    query += appendMultidisciplinary(multi);
    console.log(query);
    return query;
  } else if (specification !== '') {
    query += ' WHERE ' + specification + ' AND (';
  } else {
    query += ' WHERE ';
  }
  // Adds one placeholder for each specified major
  majors.forEach((major, index) => {
    query += '`Project_Categories` LIKE ?';
    if (index < majors.length - 1 && multi === 'only') {
      query += ' AND ';
    } else if (index < majors.length - 1) {
      query += ' OR ';
    }
  });

  // Checks to see if user wants Computer Engineering results but not Computer Science results
  if (majors.includes('Computer') && !majors.includes('Computer Science')) {
    query += " AND `Project_Categories` NOT LIKE '%Computer Science%'";
  }

  if (specification !== '') {
    query += ')';
  }

  query += appendMultidisciplinary(multi);

  console.log(query);
  // Returns finished query
  return query;
}

// Queries database with user chosen selections
const executeQuery = (query, data) => {
  return new Promise((resolve, reject) => {
    connection.query(query, data, function (error, results, fields) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Handler to shut down database on interrupt
process.on('SIGINT', function () {
  console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
  console.log('Closing database connection...');

  connection.end(function (err) {
    if (err) {
      console.log(err);
    }
  });

  process.exit();
});

module.exports = { query };
