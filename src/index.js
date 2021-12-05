const { MySQLAbstractModel } = require("./MySQLModel/MySQLAbstractModel");
const { MySQLModel } = require("./MySQLModel/MySQLModel");
(async () => {
    try {
        await MySQLAbstractModel.createConnection({
            uri: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: 'db_mysql_model'
        });
        MySQLModel.tableName = 'tb_categories';
        console.log(await MySQLModel.find())
    } catch(ex) {
        console.log(ex.message);
    }
})();