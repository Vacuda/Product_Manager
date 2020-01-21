const products = require('../controllers/products');

module.exports = (app) => {

    app.get('/api/products', (req, res)                    => products.all(req, res));
    app.get('/api/product/:id', (req, res)                 => products.show(req, res));
    app.post('/api/product/create', (req, res)             => products.create(req, res));
    app.put('/api/product/update/:id', (req, res)          => products.update(req, res));
    app.delete('/api/product/destroy/:id', (req, res)      => products.destroy(req, res));
    app.get('/api/product/complete/:id', (req, res)        => products.complete(req, res));


}
