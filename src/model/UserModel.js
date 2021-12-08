const { Schema, mySQLModel } = require("../MySQLModel");

const userSchema = new Schema({
  username: {
    type: "VARCHAR",
    length: 32,
    require: true,
  },
  email: {
    type: "VARCHAR",
    length: 32,
    require: true,
  },
  firstName: {
    type: "VARCHAR",
    length: 32,
    name: "first_name",
  },
  lastName: {
    type: "VARCHAR",
    length: 32,
    name: "last_name",
  },
  isVerified: {
    type: "TINYINT",
    length: 1,
    default: 0,
    name: "is_verified",
  },
});

const UserModel = mySQLModel.model("Users", userSchema);

module.exports = { UserModel };
