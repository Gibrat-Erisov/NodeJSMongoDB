var sql = require("mssql");
var config = require('../../config/app')

const getAll = (req, res) => {

    var conn = new sql.ConnectionPool(config.config)
    var req = new sql.Request(conn);

    conn.connect( function (err) {
        if (err) console.log(err);

        req.query('SELECT * FROM Indicater', function (err, recordset) {
            
            if (err) console.log(err)
            res.send(recordset);
            conn.close();
        });

    })
}

module.exports = {
    getAll
};