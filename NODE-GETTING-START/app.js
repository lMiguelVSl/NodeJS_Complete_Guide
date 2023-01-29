const http = require('http');

const server = http.createServer((req, res) => {
    console.log('req', req);
    // how to hard end the server => process.exit();
});

server.listen(3000);
