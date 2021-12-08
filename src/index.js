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

    console.log(CategoryModel.schema.column);

    require("./routes/category");
  } catch (ex) {
    console.log(ex.message);
  }
})();
