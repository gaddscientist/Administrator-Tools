const express = require('express');
const path = require('path');
const db = require('./projects_db');
const app = express();

// Parses data sent from front end
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Request-Method', '*');
    res.header('Access-Control-Allow-Headers', "*");
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PATCH, DELETE, PUT');
    if ( req.method === 'OPTIONS' ) {
        res.writeHead(200);
        res.end();
        return;
    }
    next();
  }
app.use(allowCrossDomain);


// ONLY LEFT IN AS AN EXAMPLE. index.html REQUEST HANDLED BY DEFAULT HANDLER
// Handles route to index.html
// app.get('/', function(req, res){
//     res.sendFile('index.html');
// });

// Handles POST requests to built report
app.post('/filter.html', function(req, res) {
    // Gets chosen criteria into local variable
    console.log(req.body);
    const columns = Array.from(req.body);

    // console.log(columns);
    // console.log(typeof columns);
    // Prints criteria to console
    
    columns.forEach(column => console.log(column));


    const a = db.query(columns);
    console.log('A: ' + a);


    // Redirects back to filter page
    // res.sendFile('filter.html', { root: rootDir });
    // res.send("MADE IT");
});

// src folder is two folders above server.js file
const rootDir = path.join(__dirname, '..', '..')

// Default handler
app.use(express.static(rootDir), function(req, res, next) {
    // Moves to next middleware function if present
    return next();
});
// const a = db.test(['Project_Name', 'Instructor_1_Name']);
// const a = db.query(['Project_Name', 'Instructor_1_Name']);
// console.log(a);

// Listen for any incoming requests
app.listen(5000);

console.log('Node.js web server at port 5000 is running..')