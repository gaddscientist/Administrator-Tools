  const mysql      = require('mysql');
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'capstone330',
    database : 'capstone'
  });

function query(cols) {

  const select = connection.connect(function(err, columns) {
    if(err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    
    // Create select string: 
    /*const selectString = ''
    cols.forEach(col = > {
      selectString += col + ', '
    });
    selectString.splice(-2); // Gets rid of trailing comma and space

    SELECT ?? ,[selectString]
    */

    // const cols = ['Project_Name', 'Instructor_1_Name'];
    console.log('Cols: ' + cols);
    executeQuery(cols);
    
    // connection.query('SELECT `Project_Name` FROM `projects` WHERE `Project_Categories` = "Computer Science"', function(error, results, fields) {
    // connection.query('SELECT ??, ?? FROM `projects` WHERE `Project_Categories` = "Computer Science"', cols, function(error, results, fields) {
    //   // error will be an Error if one occured during the query
    //   // results will contain the results of the query
    //   // fields will contain information about the returned results field (if any)
    //   if(error) {
    //     console.log(error);
    //   }
    //   else {
    //     resultSet = results;
    //     console.log(resultSet);
    //     // results.forEach(result => {
    //     //   console.log(result.Instructor_1_Name, '\t\t', result.Project_Name)
    //     // });
    //   }
    // });

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

function executeQuery(cols) {
  // return new Promise((resolve, reject) => {
    connection.query('SELECT ??, ?? FROM `projects` WHERE `Project_Categories` = "Computer Science"', cols, function(error, results, fields) {
      // error will be an Error if one occured during the query
      // results will contain the results of the query
      // fields will contain information about the returned results field (if any)
      if(error) {
        console.log(error);
        // reject(error);
      }
      else {
        // console.log(results);
        // console.log(resultSet);
        results.forEach(result => {
          // console.log(result.Instructor_1_Name, '\t\t', result.Project_Name)
          console.log(result);
        });
        // resolve(results);
      }
    });
  // });
} 


module.exports = { query };



// Restructure code back into Promise/async