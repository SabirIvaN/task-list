let fs = require("fs");
let url = require("url");
let http = require("http");
let path = require("path");

let port = process.argv[2] || 8888;
let mimeTypes = {
    "js": "text/javascript",
    "css": "text/css",
    "png": "image/png",
    "jpg": "image/jpeg",
    "svg": "image/svg+xml",
    "html": "text/html",
    "jpeg": "image/jpeg",
    "json": "application/json"
};
 
http.createServer((request, response) => {

    let uri = url.parse(request.url).pathname;
    let filename = path.join(process.cwd(), uri);
  
    fs.exists(filename, (exists) => {
        if(!exists) {
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.write("404 Not Found\n");
            response.end();
            return;
        }
        if (fs.statSync(filename).isDirectory()) filename += './public/index.html';
 
        fs.readFile(filename, "binary", (err, file) => {
            if(err) {        
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write(err + "\n");
                response.end();
                return;
            }
      
            let mimeType = mimeTypes[filename.split('.').pop()];
      
            if (!mimeType) mimeType = 'text/plain';
      
            response.writeHead(200, { "Content-Type": mimeType });
            response.write(file, "binary");
            response.end();
        });
    });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
