  const mysql      = require('mysql');

  // Connection details
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'capstone330',
    database : 'projects'
  });

  // Connect to database
  connection.connect(function(err, columns) {
    if(err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  });

// External function to be called from server.js
async function query(cols) {

  // Creates query string
  const query = buildQueryString(cols);

  // Executes query string
  const queryArr = await executeQuery(query, cols);

  return queryArr;

}

// Creates SQL query statement to be executed
function buildQueryString(cols) {
  let query = 'SELECT ';

  // Adds one placeholder for each specified column
  cols.forEach(col => {
    query += '??, ';
  });

  // Removes trailing ', ' from last placeholder
  query = query.slice(0, -2);

  // Finishes query
  query += ' FROM `projects` WHERE `Project_Categories` = "Computer Science"';

  // Returns finished query
  return query;

}

// Queries database with user chosen selections
const executeQuery = (query, cols) => {
  return new Promise((resolve, reject) => {
    const a = connection.query(query, cols, function(error, results, fields) {
      if(error) {
        reject(error);
      }
      else {
        resolve(results);
      }
    });
  })
}

// Handler to shut down database on interrupt
process.on( 'SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    console.log('Closing database connection...');

    connection.end(function(err) {
      if(err) {
        console.log(err);
      }
    });

    process.exit( );
  });


module.exports = { query };