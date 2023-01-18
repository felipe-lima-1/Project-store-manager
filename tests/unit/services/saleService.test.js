const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const saleModel = require("../../../src/models/saleModel");
const saleService = require("../../../src/services/saleService");
const salesMock = require("../mocks/salesMock");

chai.use(sinonChai);
const { expect } = require("chai");

describe("Testando Sale Service", () => {
  describe("Find All", () => {
    it("1", async () => {
      sinon.stub(saleModel, "findAllSales").resolves(salesMock.mockAllSales);
      
       await saleService.findAllSales();

    });
  });

  describe("Find by Id", () => {
    it("2", async () => {
      sinon.stub(saleModel, "findSaleById").resolves(salesMock.mockOneSale);

      await saleService.findSaleById(1);
    });
    
  });
});
