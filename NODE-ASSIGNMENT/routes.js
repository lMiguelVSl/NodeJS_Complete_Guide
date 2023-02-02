const requestHandler = (req, res) => {
    console.log('req', req);
    const url = req.url;

    if (url === '/') {
        res.write('<html><body><h1>Hello to my node assignment!</h1></body></html>');
        return res.end();
    }
}

module.exports.requestHandler = requestHandler;