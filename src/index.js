const { createConnection, mySQLModel } = require("./MySQLModel");
(async () => {
  try {
    const connectionOptions = {
      uri: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "db_mysql_model",
    };
    await createConnection(connectionOptions);

    const CategoryModel = mySQLModel.model("Category", {}, "tb_categories");
    const category = new CategoryModel();

    console.log(await category.find());
    // const categoryList = await CategoryModel.find();

    // console.log(categoryList);

    const UserModel = mySQLModel.model("Users", {});
    const userList = await UserModel.find();

    console.log("User =>");
    console.log(userList);

    console.log("Category Map");
    console.log(mySQLModel.get("Category"));
  } catch (ex) {
    console.log(ex.message);
  }
})();
