const express = require('express');

const productsController = require('./controllers/productsController');
const salesController = require('./controllers/saleController');

const app = express();
app.use(express.json());
app.get('/', (_request, response) => {
  response.send();
});
app.get('/products', productsController.findAll);
app.get('/products/:id', productsController.findById);
app.post('/products', productsController.createProduct);
app.post('/sales', salesController.newSaleProduct);

module.exports = app;