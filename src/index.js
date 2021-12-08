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

    // register model
    mySQLModel.model("Category", {}, "tb_categories");
    mySQLModel.model("Users", {});

    require("./routes/category");
  } catch (ex) {
    console.log(ex.message);
  }
})();
