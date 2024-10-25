// routes/produk.js
const express = require('express');
const router = express.Router();
const produkController = require('../controllers/produkController');

router.get('/', produkController.getAllProduk);
router.post('/', produkController.createProduk);

module.exports = router;
