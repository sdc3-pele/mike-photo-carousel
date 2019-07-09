const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);

const getAllPhotos = () => {
  let queryStr = 'select '
}