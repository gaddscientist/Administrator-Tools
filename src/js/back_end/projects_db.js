var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'capstone330',
  database : 'capstone'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  
  connection.query('SELECT `Project_Name` FROM `projects` WHERE `Project_Categories` = "Computer Science"', function(error, results, fields) {
    // error will be an Error if one occured during the query
    // results will contain the results of the query
    // fields will contain information about the returned results field (if any)
    if(error) {
      console.log(error);
    }
    else {
      results.forEach(result => {
        console.log(result.Project_Name)
      });
    }
  });

  connection.end(function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log('Connection closed...');
    }
  });
});
