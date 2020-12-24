  const mysql      = require('mysql');
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'capstone330',
    database : 'projects'
  });

function query(cols) {

  const select = connection.connect(function(err, columns) {
    if(err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    
    const query = buildQueryString(cols);
    executeQuery(query, cols);
    
    connection.end(function(err) {
      if(err) {
        console.log(err);
      }
      else {
        console.log('Connection closed...');
      }
    });
  });
}

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


module.exports = { query };