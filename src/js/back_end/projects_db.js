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
async function query(cols, major) {
  // Creates query string
  const query = buildQueryString(cols, major);

  const data = cols;
  major === "All Majors" ? data.push("*") : data.push("%" + major + "%");

  // Executes query string
  const queryArr = await executeQuery(query, data);

  return queryArr;
}

// Creates SQL query statement to be executed
function buildQueryString(cols, major) {
  let query = "SELECT ";

  // Adds one placeholder for each specified column
  cols.forEach((col) => {
    query += "??, ";
  });

  // Removes trailing ', ' from last placeholder
  query = query.slice(0, -2);

  // Finishes query
  if (major === "All Majors") {
    query += " FROM `projects`";
  } else if (major === "Computer") {
    query +=
      " FROM `projects` WHERE `Project_Categories` LIKE ? AND `Project_Categories` NOT LIKE '%Computer Science%'";
  } else {
    query += " FROM `projects` WHERE `Project_Categories` LIKE ?";
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
