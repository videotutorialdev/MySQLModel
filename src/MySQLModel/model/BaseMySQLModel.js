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
    const queryObject = {};

    const { schema } = this.schema;

    Object.keys(schema).forEach((key) => {
      const name = schema[key].name || key;
      if (payload[key]) {
        queryObject[name] = payload[key];
      } else {
        if (schema[key].primary) return;
        const defaultValue = schema[key].default;
        queryObject[name] =
          typeof defaultValue === "undefined" ? null : defaultValue;
      }
    });

    const query = `INSERT INTO ${this.tableName} (${Object.keys(
      queryObject
    )}) VALUES (${Object.values(queryObject).map((val) => `'${val}'`)})`;

    const result = await this.connection.query(query);
    payload.id = result[0].insertId;
    return payload;
  }

  static async findOneById(id) {
    const [result] = await this.connection.query(
      `SELECT ${this.schema.column} FROM ${this.tableName} WHERE id = ${id}`
    );
    return result[0];
  }

  static async findByIdAndUpdate(id, payload) {
    const queryObject = {
      updated_at: Date.now(),
    };

    const { schema } = this.schema;

    Object.keys(schema).forEach((key) => {
      const name = schema[key].name || key;
      if (payload[key]) {
        queryObject[name] = payload[key];
      }
    });

    const query = `UPDATE ${this.tableName} SET ${Object.keys(queryObject).map(
      (key) => `${key}='${queryObject[key]}'`
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
