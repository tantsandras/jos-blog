const dbConnection = require('../db/db_connection.js');

const getBpData = cb => {
  dbConnection.query(`SELECT * FROM blogposts`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};


module.exports = {
    getBpData
}