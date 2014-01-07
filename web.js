var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Alles Gut!');
});

server.listen((process.env['PORT'] || '5000'), function() {
    console.log('Running on port ' + (process.env['PORT'] || '5000'));
});
