const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<header><title>My first node page</title></header>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            console.log('chunk', chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            console.log('parse body', parseBody);
            fs.writeFileSync('Txt Files/message.txt', message.replace('+\g', ' '));
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html><header><title>My first node page</title></header></html>');
    res.write('<body><h1>Hello from my nodeJS server!</h1></body>');
    res.end();
    // how to hard end the server => process.exit();

};

module.exports = {
    requestHandler
}