const createError = require("http-errors");
const UserModel = require("../models/user");
const UserModelInstance = new UserModel();

module.exports = class UserService {
  async get(data) {}
  async update(data) {}
};
