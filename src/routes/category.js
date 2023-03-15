const { mySQLModel } = require("../MySQLModel");

(async () => {
  const categoryModel = mySQLModel.get("Category");
  const usersModel = mySQLModel.get("Users");
  console.log(await categoryModel.findOneById(2));
  console.log(await usersModel.find());
})();
