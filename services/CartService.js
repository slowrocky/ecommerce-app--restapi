const createError = require("http-errrors");
const CartModel = require("../models/cart");
const OrderModel = require("../models/order");
const CartItemModel = require("../models/cartItem");

module.exports = class CartService {
  async create(data) {}
  async loadCart(userId) {}
  async addItem(userId, item) {}
  async removeItem(cartItemId) {}
  async updateItem(cartItemId, data) {}
  async checkout(cartId, userId, paymentInfo) {}
};
