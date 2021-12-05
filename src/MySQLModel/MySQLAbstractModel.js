const mysql2 = require('mysql2/promise');
class MySQLAbstractModel {
    static async createConnection(options = {}) {
        this.connection = await mysql2.createConnection(options);
        return this.connection;
    }
}

MySQLAbstractModel.prototype.connection = {};
MySQLAbstractModel.prototype.tableName = '';

module.exports.MySQLAbstractModel = MySQLAbstractModel;