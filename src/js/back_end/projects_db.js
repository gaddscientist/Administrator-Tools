const mysql = require("mysql");

// Connection details
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "capstone330",
  database: "projects",
});

// Connect to database
connection.connect(function (err, columns) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

// External function to be called from server.js
async function query(cols, majors) {
  // Creates query string
  console.log(cols, majors);
  const query = buildQueryString(cols, majors);
  console.log("Query = " + query);

  let data = cols;
  if(!majors.includes("All Majors")) {
    // data = data.concat(majors);
    majors.forEach(major => {
      data.push('%' + major + '%');
    });
  }
  console.log("data = " + data);

  // Executes query string
  const queryArr = await executeQuery(query, data);

  return queryArr;
}

// Creates SQL query statement to be executed
function buildQueryString(cols, majors) {
  let query = "SELECT ";

  // Adds one placeholder for each specified column
  cols.forEach(() => {
    query += "??, ";
  });

  // Removes trailing ', ' from last placeholder
  query = query.slice(0, -2);

  query += " From `projects`";

  // Finishes query
  if (majors[0] === "All Majors") {
    return query;
  } else {
    query += " WHERE "
  }

  // Adds one placeholder for each specified major
  majors.forEach((major, index) => {
    query += "`Project_Categories` LIKE ?"
    if(index < majors.length - 1) {
      query += " OR ";
    }
  });

  // Checks to see if user wants Computer Engineering results but not Computer Science results
  if(majors.includes("Computer") && !majors.includes("Computer Science")) {
    query += " AND `Project_Categories` NOT LIKE '%Computer Science%'";
  }

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
process.on("SIGINT", function () {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  console.log("Closing database connection...");

  connection.end(function (err) {
    if (err) {
      console.log(err);
    }
  });

  process.exit();
});

module.exports = { query };
