const createError = require("http-errors");
const ProductModel = require("../models/product");
const ProductModelInstance = new ProductModel();

module.exports = class ProductService {
  async list(options) {}
  async get(id) {}
};
