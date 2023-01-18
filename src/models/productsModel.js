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

const maxProduct = async () => {
  const queryProducts = 'SELECT MAX(id) as id FROM products';
  const [[maxId]] = await connection.execute(queryProducts);
  return maxId.id;
};

const updateProducts = async (id, name) => {
  const [{ affectedRows }] = await connection.execute(
    'UPDATE products SET name=? WHERE id=?',
    [name, id],
  );
  return affectedRows;
};

const deleteProduct = async (id) => {
  await connection.execute('DELETE FROM products WHERE id=?', [id]);
  return true;
};

module.exports = {
  findAll,
  findById,
  createProduct,
  maxProduct,
  updateProducts,
  deleteProduct,
};