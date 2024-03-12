
const ProductController = require('../controllers/product.controller')
console.log("hello routes")

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts),
    app.get('/api/products/:id', ProductController.findOneProduct),
    app.patch('/api/products/:id', ProductController.updateExistingProduct),
    app.patch('/api/:id/edit', ProductController.updateExistingProduct),
    app.post('/api/products', ProductController.createNewProduct),
    app.delete('/api/products/:id', ProductController.deleteAnExistingProduct)
}