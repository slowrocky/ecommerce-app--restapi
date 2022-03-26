const db = require('../db');
const moment = require('moment');
const pgp = require('pg-promise')({ capSQL: true});

module.exports = class CartModel {

  constructor(data = {}) {
    this.created = data.created || moment.utc().toISOString();
    this.modified = moment.utc().toISOString();
    this.converted = data.converted || null;
    this.isActive = data.isActive || true;
  }

  async create(userId) {
    try {
      
      const data = { userId, ...this}

      // Generate SQL statement - using helper for dynamic parameter injection
      const statement = pgp.helpers.insert(data, null, 'carts') + 'RETURNING *';

      // Execute SQL statement
      const result = await db.query(statement);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return null;
    } catch (err) {
      throw new Error(err);
    }
  }
}