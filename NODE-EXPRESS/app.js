const http = require('http');
const express = require('express');

const app = express();
app.use((req, res, next) => {
    console.log('MIDDLEWARE!');
    next(); //continue with the next one
});

app.use((req, res, next) => {
    console.log('ANOTHER MIDDLEWARE!');
    res.write('<h1>Second express middleware</h1>');
    res.end();
});

app.listen(3000);