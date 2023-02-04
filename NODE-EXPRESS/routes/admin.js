const express = require('express');

const router = express.Router();

router.use('/add-product', (req, res, next) => {
    res.send(
        `<h1>add-product express middleware</h1>
         <hr>
         <form action="/product" method="POST" >
            <input type="text" name="Product">
            <button type="submit">Send</button>
         </form>`
    );
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;