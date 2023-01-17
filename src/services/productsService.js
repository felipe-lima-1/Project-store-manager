const productsModel = require('../models/productsModel');
const { productValidate } = require('../middlewares/validation');

const findAll = async () => {
  const products = await productsModel.findAll();
  return products;
};

const findById = async (id) => {
  const product = await productsModel.findById(id);
  console.log(product);
  if (!product.length) {
    return { err: { code: 'not_found', message: 'Product not found' } };
  }
  return product;
};

const createProduct = async (name) => {
  const resValidation = productValidate(name);
  if (resValidation) return resValidation;
  const product = await productsModel.createProduct(name);
  return product;
};

module.exports = {
  findAll,
  findById,
  createProduct,
};
