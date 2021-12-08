const mysql2 = require("mysql2/promise");
const { BaseMySQLModel } = require("./model/BaseMySQLModel");
const createConnection = (connectioOptions = {}) => {
  return new Promise((resolve, reject) => {
    mysql2
      .createConnection(connectioOptions)
      .then((connection) => {
        console.log(
          `[ MySQL ]: Successfully to connect to database ${connectioOptions.database}`
        );
        BaseMySQLModel.connection = connection;
        resolve(connection);
      })
      .catch((err) => {
        console.log(
          `[ MySQL ]: Failed to connect to database ${connectioOptions.database}`
        );
        reject(err);
      });
  });
};

module.exports = { createConnection };
