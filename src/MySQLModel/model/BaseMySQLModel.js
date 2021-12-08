class BaseMySQLModel {
  static connection = {};
  static tableName = "";
  static schema = {};
  static modelName = "";
  static modelMap = new Map();

  constructor(payload) {
    this.payload = payload;
  }

  static async find() {
    const result = await this.connection.query(
      `SELECT ${this.schema.column} FROM ${this.tableName}`
    );
    return result[0];
  }

  static async save(payload) {
    payload.created_at = Date.now();
    payload.updated_at = Date.now();
    const query = `INSERT INTO ${this.tableName} (${Object.keys(
      payload
    )}) VALUES (${Object.values(payload).map((val) => `'${val}'`)})`;
    const result = await this.connection.query(query);
    payload.id = result[0].insertId;
    return payload;
  }

  static async findOneById(id) {
    const [result] = await this.connection.query(
      `SELECT * FROM ${this.tableName} WHERE id = ${id}`
    );
    return result[0];
  }

  static async findByIdAndUpdate(id, payload) {
    payload.updated_at = Date.now();
    const query = `UPDATE ${this.tableName} SET ${Object.keys(payload).map(
      (key) => `${key}='${payload[key]}'`
    )} WHERE id = ${id}`;
    await this.connection.query(query);
    return this.findOneById(id);
  }

  static async findByIdAndDelete(id) {
    const dataBeforeDelete = await this.findOneById(id);
    const result = await MySQLModel.connection.query(
      `DELETE FROM ${this.tableName} WHERE id=${id}`
    );
    if (result && result[0].affectedRows !== 0) {
      return dataBeforeDelete;
    }
    return result;
  }

  static async bulkDelete(where) {
    const query = `DELETE FROM ${this.tableName} WHERE ${Object.keys(
      where
    )} IN (${Object.values(where)[0].join(",")})`;
    return this.connection.query(query);
  }
}

module.exports = { BaseMySQLModel };
