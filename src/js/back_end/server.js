const express = require('express');
const path = require('path');
const app = express();

// Parses data sent from front end
app.use(express.urlencoded({ extended: false }));

// ONLY LEFT IN AS AN EXAMPLE. index.html REQUEST HANDLED BY DEFAULT HANDLER
// Handles route to index.html
// app.get('/', function(req, res){
//     res.sendFile('index.html');
// });

// Handles POST requests to built report
app.post('/filter.html', function(req, res) {
    // Gets chosen criteria into local variable
    const columns = req.body.column;
    // Prints criteria to console
    columns.forEach(column => console.log(column));
    // Redirects back to filter page
    res.sendFile('filter.html', { root: rootDir });
});

// src folder is two folders above server.js file
const rootDir = path.join(__dirname, '..', '..')

// Default handler
app.use(express.static(rootDir), function(req, res, next) {
    // Moves to next middleware function if present
    return next();
});

// Listen for any incoming requests
app.listen(5000);

console.log('Node.js web server at port 5000 is running..')