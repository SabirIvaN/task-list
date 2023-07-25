"use strict";

const fs = require("fs");
const http = require("http");
const path = require("path");
const config = require("./config.js");

const errorHandler = (res) => {
	res.writeHead(404);
	res.end();
};

const readFile = (localPath, res, fileMimeType) => {
	fs.readFile(localPath, (error, data) => {
		res.setHeader("Content-Type", fileMimeType);
		res.statusCode = 200;
		res.end(data);
	});
};

http.createServer((req, res) => {
	let fileName = req.url === "/" ? "public/index.html" : req.url;
	let localPath = path.join(__dirname, fileName);
	let ext = path.extname(fileName);
	let fileMimeType = config.mimeTypes[ext];

	fs.exists(localPath, (status) => {
		status ? readFile(localPath, res, fileMimeType) : errorHandler(res);
	});
}).listen(config.port);

console.log("Static file server running at http://localhost:" + config.port);