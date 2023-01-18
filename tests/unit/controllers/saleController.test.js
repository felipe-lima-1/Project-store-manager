const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const saleMock = require("../mocks/salesMock");
const saleService = require("../../../src/services/saleService");
const saleController = require("../../../src/controllers/saleController");

describe("Testando Sale Controller", () => {
  describe("New Sales", () => {
    it("1", async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(saleService, "newSale").resolves({
        status: 201,
        response: { id: 1, itemsSold: [...saleMock.mockAllSales] },
      });

      await saleController.newSaleProduct(req, res);
    });
  });
})