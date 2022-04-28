//
var http = require('http');
var fs =  require('fs');
var path = require('path');

http.createServer(function(request, response) {
    console.log('request', request.url);
    var filePath = '.' + request.url;
    if (filePath == './'){
        filePath = './index.html';
    }

    var extname=String(path.extname(filePath)).toLowerCase();
    var contentType = 'text/html';
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif'
    }

    
});