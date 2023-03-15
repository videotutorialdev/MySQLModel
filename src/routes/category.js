const { mySQLModel } = require("../MySQLModel");

(async () => {
  const categoryModel = mySQLModel.get("Category");
  const usersModel = mySQLModel.get("Users");
  console.log(await categoryModel.findOneById(2));
  console.log(await usersModel.findOneById(5));

  // const result = await usersModel.findByIdAndUpdate(5, {
  //   username: "johnsmithnew",
  // });

  // console.log("");
  // console.log(await result);
  // console.log("");
})();
