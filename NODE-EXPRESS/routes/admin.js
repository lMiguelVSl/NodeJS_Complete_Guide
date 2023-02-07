const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path');

const router = express.Router();

// /admin route
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir.path, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir.path, 'views', 'add-product.html'));
})

module.exports = router;