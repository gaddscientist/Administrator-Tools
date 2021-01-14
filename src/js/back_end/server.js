const express = require("express");
const path = require("path");
const db = require("./projects_db");
const app = express();

// Parses data sent from front end
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ONLY LEFT IN AS AN EXAMPLE. index.html REQUEST HANDLED BY DEFAULT HANDLER
// Handles route to index.html
// app.get('/', function(req, res){
//     res.sendFile('index.html');
// });

// Handles POST requests to built report
app.post("/filter.html", async function (req, res) {
  // Gets chosen criteria into local variable
  const columns = Array.from(req.body.columns);
  const majors = req.body.majors;

  // Queries database with selected columns
  const rows = await db.query(columns, majors);

  // Logs to terminal
  console.log(rows);

  // returns query result
  res.json(rows);
});

// src folder is two folders above server.js file
const rootDir = path.join(__dirname, "..", "..");

// Default handler
app.use(express.static(rootDir), function (req, res, next) {
  // Moves to next middleware function if present
  return next();
});

process.on("SIGINT", function () {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  // some other closing procedures go here
  process.exit();
});

// Listen for any incoming requests
app.listen(5000);

console.log("Node.js web server at port 5000 is running..");
