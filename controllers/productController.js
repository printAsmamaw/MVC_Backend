const ProductModel = require('../models/productModel');

const getAllProducts = (req, res) => {
    ProductModel.getAllProducts((err, results) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json(results);
        }
    });
};


const createProduct = (req, res) => {
    const product = req.body;
    ProductModel.createProduct(product, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(201).json({ message: 'Product created successfully', productId: results.insertId });
        }
    });
};


const updateProduct = (req, res) => {
    const productId = req.params.productId;
    
    const updatedProduct = req.body;
    ProductModel.updateProduct(productId, updatedProduct, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.status(200).json({ message: 'Product updated successfully' });
        }
    });
};

const deleteProduct = (req, res) => {
    const productId = req.params.productId;
    ProductModel.deleteProduct(productId, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.status(200).json({ message: 'Product deleted successfully' });
        }
    });
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};
