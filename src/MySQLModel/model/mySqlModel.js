const { BaseMySQLModel } = require("./BaseMySQLModel");
const mySQLModel = (modelName, schema, tableName) => {
  class MySQLModel extends BaseMySQLModel {
    constructor(payload) {
      super(payload);
      this.modelName = modelName;
      this.schema = schema;
      this.tableName = tableName;
    }

    save(payload) {
      return MySQLModel.save(payload || this.payload);
    }

    find() {
      return MySQLModel.find();
    }
  }

  BaseMySQLModel.modelMap.set(modelName, new MySQLModel());

  MySQLModel.tableName = tableName || modelName.toLowerCase();
  mySQLModel.modelName = modelName;
  MySQLModel.schema = schema;

  return MySQLModel;
};

module.exports = {
  mySQLModel,
};
