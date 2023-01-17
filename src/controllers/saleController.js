const saleService = require('../services/saleService');

const newSaleProduct = async (req, res) => {
  const sales = req.body;
  const sale = await saleService.newSale(sales);
  if (sale.status) return res.status(sale.status).json(sale);
  return res.status(201).json(sale);
};

const findAllSales = async (_req, res) => {
  const allSales = await saleService.findAllSales();
  res.status(200).json(allSales);
};

const findSaleById = async (req, res) => {
  const { id } = req.params;
  const idSale = await saleService.findSaleById(id);
  if (!idSale.error) {
    res.status(200).json(idSale);
  } else {
    const { status } = idSale.error;
    res.status(status).json(idSale.error);
  }
};

module.exports = {
  newSaleProduct,
  findAllSales,
  findSaleById,
};
