const saleModel = require('../models/saleModel');
const middlewares = require('../middlewares/validationSale');

const newSale = async (sales) => {
  const error = await middlewares.validations(sales);
  if (error) {
    return error;
  }
  const id = await saleModel.newSale(sales);
  return { id, itemsSold: sales };
};

const findAllSales = async () => {
  const allSales = await saleModel.findAllSales();
  return allSales;
};

const findSaleById = async (id) => {
  const idSale = await saleModel.findSaleById(id);
  if (idSale.length === 0) {
    return {
      error: { status: 404, message: 'Sale not found' },
    };
  }
  return idSale;
};

module.exports = {
  newSale,
  findAllSales,
  findSaleById,
};
