const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = require("chai");

const saleModel = require("../../../src/models/saleModel");
const saleMock = require("../mocks/salesMock");
const connection = require("../../../src/models/connection");

describe("Testando Sale Model", () => {
  describe("Find All Sales", () => {
    afterEach(() => {
      sinon.restore();
    });
    it("1", async () => {
      sinon.stub(connection, "execute").resolves(saleMock.mockAllSales);

      await saleModel.findAllSales();
    });
    it("Find by Id Sales", async () => {
      sinon.stub(connection, "execute").resolves([saleMock.mockfindSaleById]);

      await saleModel.findSaleById(1);
    });
  });
});
