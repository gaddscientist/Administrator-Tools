const http = require('http'); // Import Node.js core module
const express = require('express');
const path = require('path');
const app = express();

// src folder is two folders above server.js file
const parent = path.join(__dirname, '..', '..')
// Sets base directory so absolute paths aren't needed
app.use(express.static(parent));

// Handles route to index.html
// NOTE** May want to add links to other html files
// NOTE** Relative links still work fine
app.get('/', function(req, res){
    res.sendFile('index.html');
}); 

// Listen for any incoming requests
app.listen(5000);

console.log('Node.js web server at port 5000 is running..')