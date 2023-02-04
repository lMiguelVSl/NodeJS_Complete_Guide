const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body></html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><ul><li>User 1</li><li>User 2</li></ul></body></html>');
        return res.end();
    }
    if (url === '/create-user' && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1].split('+').join(' ');
            fs.writeFileSync('Txt Files/message.txt', message);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }


    res.write('<html><body>404 Not Found</body></html>');

}

module.exports.requestHandler = requestHandler;