const productController = require('../Controller/productController');
const express = require('express');

const productRoute = express.Router();


productRoute.post('/upload-product', productController.createproduct);
productRoute.get('/get-all-product', productController.getAllProducts);
productRoute.get('/get-one-product/:id', productController.getOneById);
productRoute.get('/delete-product', productController.deleteProduct);
productRoute.patch('/update-product', productController.updateProduct);

module.exports = productRoute;