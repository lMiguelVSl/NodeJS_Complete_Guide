const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    res.send('<h1>add-product express middleware</h1><hr><form action="/product" method="POST" ><input type="text" name="Product"><button type="submit">Send</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    res.send('<h1>Default express middleware</h1>');
});


app.listen(3000);