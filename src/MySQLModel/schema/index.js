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
    schema.isDelete = {
      type: "TINYINT",
      length: 1,
      default: 0,
      name: "is_deleted",
    };

    this.schema = schema;
  }
}

module.exports = {
  MySQLSchema,
};
