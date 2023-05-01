var http = require('http');

const PORT = 8080;

function handleRequest(request, response) {
    response.write(request.method + ' ' + request.url + '\n');
    response.end("Hello, World!");
}

var server = http.createServer(handleRequest);

// start server
server.listen(PORT, function() {
    console.log('Listening on port %s', PORT);
});