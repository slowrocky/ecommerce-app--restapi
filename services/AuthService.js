const createError = require("http-errors");
const UserModel = require("../models/user");
const UserModelInstance = new UserModel();

module.exports = class AuthService {
  async register(data) {}

  async login(data) {}
};
