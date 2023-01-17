const salesModels = require('../models/saleModel');
const middlewares = require('../middlewares/validationSale');

const newSale = async (sales) => {
  const err = await middlewares.validations(sales);
  if (err) {
    return err;
  }

  const id = await salesModels.newSale(sales);
  return { id, itemsSold: sales };
};

module.exports = {
  newSale,
};