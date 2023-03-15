const { CategoryModel } = require("./model/CategoryModel");
const { UserModel } = require("./model/UserModel");
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

    // const result = await UserModel.findByIdAndUpdate(5, {
    //   username: "johnsmith",
    // });

    // console.log("");
    // console.log(await result);
    // console.log("");

    require("./routes/category");
  } catch (ex) {
    console.log(ex.message);
  }
})();
