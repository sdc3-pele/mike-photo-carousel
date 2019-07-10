const mysql = require('mysql');
const mockData = require('./mockData.js');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected to db!');
  }
});


const getRandomFrom = arr => arr[Math.floor(Math.random() * arr.length)];

const seed = (callback) => {
  for (let i = 0; i < 100; i += 1) {
    const queryStr = `insert into products(photo_urls) values ('${JSON.stringify(getRandomFrom(mockData))}');`;
    connection.query(queryStr, (err, data) => {
      if (err) {
        callback(err);
      } else {
        console.log('done seeding');
        callback(null, data);
      }
    });
  }
};

seed(console.log);
