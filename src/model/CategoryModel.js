const { Schema, mySQLModel } = require("../MySQLModel");

const categorySchema = new Schema({
  name: {
    type: "VARCHAR",
    length: 64,
    require: true,
  },
  description: {
    type: "VARCHAR",
    length: 255,
    require: true,
  },
});

const CategoryModel = mySQLModel.model(
  "Category",
  categorySchema,
  "tb_categories"
);

module.exports = {
  CategoryModel,
};
