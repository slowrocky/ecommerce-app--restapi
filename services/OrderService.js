const createError = require("http-errors");
const OrderModel = require("../models/order");
const OrderItemModel = require("../models/orderItem");

module.exports = class OrderService {
  async create(data) {}
  async list(userId) {}
  async findById(orderId) {}
};
