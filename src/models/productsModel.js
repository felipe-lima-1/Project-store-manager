const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const findById = async (id) => {
  const [product] = await connection.execute('SELECT * FROM products WHERE id=?', [id]);
  return product;
};

const createProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'Insert INTO products (name) Values (?)', [name],
  );
  return insertId;
};

module.exports = {
  findAll,
  findById,
  createProduct,
};