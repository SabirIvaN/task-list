'use strict';

const fs = require('fs');				// Connecting the library to work with the file system
const http = require('http');			// Connecting the library to work with the HTTP protocol
const path = require('path');			// Connecting a library to work with file paths
const config = require('./config.js');	// Connecting a module for server configuration

// Function to output error 404
const errorHandler = (res) => {
	res.writeHead(404);
	res.end();
};

// Function for reading files
const readFile = (localPath, res, fileMimeType) => {
	fs.readFile(localPath, (error, data) => {
		res.setHeader('Content-Type', fileMimeType);
		res.statusCode = 200;
		res.end(data);
	});
};

// Creating and Listening to a Server Port
http.createServer((req, res) => {
	let fileName = req.url === '/' ? 'public/index.html' : req.url;
	let localPath = path.join(__dirname, fileName);
	let ext = path.extname(fileName);
	let fileMimeType = config.mimeTypes[ext];

	fs.exists(localPath, (status) => {
		status ? readFile(localPath, res, fileMimeType) : errorHandler(res);
	});
}).listen(config.port);

// Displaying a message with a link to the running server
console.log('Static file server running at http://localhost:' + config.port);
