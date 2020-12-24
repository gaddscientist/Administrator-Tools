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
function query(cols) {

  // Creates query string
  const query = buildQueryString(cols);

  // Executes query string
  executeQuery(query, cols);

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
function executeQuery(query, cols) {
  connection.query(query, cols, function(error, results, fields) {
    // error will be an Error if one occured during the query
    // results will contain the results of the query
    // fields will contain information about the returned results field (if any)
    if(error) {
      console.log(error);
    }
    else {
      results.forEach(result => {
        // console.log(result.Instructor_1_Name, '\t\t', result.Project_Name)
        console.log(result);
      });
    }
  });
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