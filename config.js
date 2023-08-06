// Variable for port configuration
module.exports.port = process.argv[2] || 8888;

// Variable for configuring MIME types
module.exports.mimeTypes = {
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.jpg': 'image/jpg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/vnd.microsoft.icon',
    '.jpeg': 'image/jpg',
    '.html': 'text/html',
	'.json': 'application/json'
};
