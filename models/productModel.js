const db = require('./db');

const getAllProducts = (callback) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};

const createProduct = (product, callback) => {
    db.query('INSERT INTO products SET ?', product, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};

const updateProduct = (productId, updatedProduct, callback) => {
    db.query('UPDATE products SET ? WHERE id = ?', [updatedProduct, productId], (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};

const deleteProduct = (productId, callback) => {
    db.query('DELETE FROM products WHERE id = ?', productId, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};
