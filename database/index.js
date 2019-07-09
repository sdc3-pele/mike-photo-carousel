const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);


const getAllPhotos = (id) => {
  let queryStr = 'select * from products where product_id=?;'
  let params = id;
  return new Promise((resolve, reject) => {
    db.query(queryStr, params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = {getAllPhotos};