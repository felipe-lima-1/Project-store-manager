const Joi = require('joi');
const productModels = require('../models/productsModel');

const condition = async (error) => {
  if (error.details[0].type === 'any.required') {
    return { status: 400, message: error.message };
  }
  if (error.details[0].type === 'number.min') {
    return { status: 422, message: error.message };
  }
};

const saleCondition = Joi.object({
  productId: Joi.number().min(1).required(),
  quantity: Joi.number().min(1).required(),
});

const idSales = async (sales) => {
  const maxId = await productModels.maxProduct();
  for (let i = 0; i < sales.length; i += 1) {
    if (sales[i].productId > maxId) {
      return { status: 404, message: 'Product not found' };
    }
  }
};

const validations = async (sales) => {
  const idValidSales = await idSales(sales);
  if (idValidSales) {
    return idValidSales;
  }
  for (let i = 0; i < sales.length; i += 1) {
    const { error } = saleCondition.validate(sales[0]);
    if (error) {
      return condition(error);
    }
  }
};

module.exports = {
  validations,
};
