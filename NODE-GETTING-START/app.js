const http = require('http');

const server = http.createServer((req, res) => {
    console.log('req url', req.url);
    console.log('req method', req.method);
    console.log('req headers', req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html><header><title>My first node page</title></header></html>');
    res.write('<body><h1>Hello from my nodeJS server!</h1></body>');
    res.end();
    // how to hard end the server => process.exit();
});

server.listen(3000);
