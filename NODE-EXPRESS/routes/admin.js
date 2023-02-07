const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path');

const router = express.Router();

const products = [];

// /admin route
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir.path, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    products.push(req.body.title);
    console.log('products', products);
})

module.exports = {
    router: router,
    products: products
};