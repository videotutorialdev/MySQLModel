/**
 * type: 'VARCHAR' | 'INT' | dst...
 * min
 * max
 * minLength
 * maxLength
 * length
 * required
 * name
 * ref
 * refField
 * primary
 * default
 */
class MySQLSchema {
  constructor(schema) {
    schema = Object.assign(
      {
        id: {
          type: "VARCHAR",
          primary: true,
          length: 36,
        },
      },
      schema
    );

    schema.createdAt = {
      type: "BIGINT",
      length: 13,
      default: Date.now(),
      name: "created_at",
    };

    schema.updatedAt = {
      type: "BIGINT",
      length: 13,
      default: Date.now(),
      name: "updated_at",
    };

    schema.createdBy = {
      type: "VARCHAR",
      length: 36,
      ref: "Users",
      name: "created_by",
    };

    schema.updatedBy = {
      type: "VARCHAR",
      length: 36,
      ref: "Users",
      name: "updated_by",
    };

    schema.isDelete = {
      type: "TINYINT",
      length: 1,
      default: 0,
      name: "is_deleted",
    };

    this.schema = schema;
  }

  get column() {
    return Object.keys(this.schema)
      .map((key) => {
        if (this.schema[key].name) {
          return `${this.schema[key].name} AS ${key}`;
        }
        return key;
      })
      .toString();
  }
}

module.exports = {
  MySQLSchema,
};
