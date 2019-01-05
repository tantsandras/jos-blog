const databaseConnection = require('../db/db_connection');
const bcrypt = require("bcryptjs");

const hashPassword = (password, cb) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        callback(err);
      } else {
        bcrypt.hash(password, salt, cb);
      }
    });
  };

  

const postDataBp = (header, img_url, text, date) => {
    databaseConnection.query(
        'INSERT INTO blogposts (header, img_url, text, date) VALUES ($1, $2, $3, $4)',
        [header, img_url, text, date],
        err => {
            if(err) return (err);
        }
    );
};


const postDataUser = (name, password, cb) => {
    hashPassword(password, (err, hashedPassword) => {
        if (err) console.log(err);
        databaseConnection.query(
            'INSERT INTO users (name, password) VALUES ($1, $2)',
            [name, hashedPassword],
            (error, res) => {
                if(err) {
                    return cb(error);
                } else {
                    cb(null, res);
                }
            }
        );
    });       
}

module.exports = {
    postDataBp,
    postDataUser,
    hashPassword,
}