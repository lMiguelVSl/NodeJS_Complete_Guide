const express = require('express');

const router = express.Router();

// /admin route
router.get('/add-product', (req, res, next) => {
    res.send(
        `<h1>add-product express middleware</h1>
         <hr>
         <form action="/admin/add-product" method="POST" >
            <input type="text" name="Product">
            <button type="submit">Send</button>
         </form>`
    );
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;