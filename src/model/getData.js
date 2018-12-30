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


const promiseItsJo = name => {
  return new Promise((resolve, reject) => {
    dbConnection.query(`SELECT * FROM users WHERE name = '${name}'`, (err, res) => {
      if (err) reject(err);
      else resolve(res.rows);
    });
  });
}


module.exports = {
    getBpData,
    promiseItsJo
}