const { createConnection } = require("./createConnection");
const { BaseMySQLModel } = require("./model/BaseMySQLModel");
const { mySQLModel } = require("./model/mySqlModel");
const { MySQLSchema } = require("./schema");
const getModel = (modelName) => {
  return BaseMySQLModel.modelMap.get(modelName);
};

module.exports = {
  createConnection,
  mySQLModel: {
    model: mySQLModel,
    get: getModel,
  },
  Schema: MySQLSchema,
};
