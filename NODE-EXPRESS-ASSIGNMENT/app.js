const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('First middleware without route');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Second middleware without route');
//     res.send('<h1>Almost done second task</h1>')
// });

app.use('/users', (req, res, next) => {
    res.send('<h1>WELCOME TO THE USER PAGE</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>WELCOME TO MY NODEJS APPLICATION</h1>')
});

app.listen(3000);