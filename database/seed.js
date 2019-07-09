// CREATE TABLE products (
//   product_id int auto_increment,
//   photo_urls JSON,
//   primary key(product_id)
// );
const mockData = require('./mockData.js');
const mysql = require('mysql');
const connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'fec_photos'
});

connection.connect(err => {
  if (err) {
    throw err;
  } else {
    console.log('Connected to db!');
  }
});


const getRandomFrom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
console.log(`TEST`, getRandomFrom(mockData))
const seed = (callback) => {
  for (var i = 0; i < 100; i++) {
    var queryStr = `insert into products(photo_urls) values ('${JSON.stringify(getRandomFrom(mockData))}');`
    connection.query(queryStr, (err, data) => {
      if (err) {
        callback(err);
      } else {
        console.log('done seeding');
        callback(null, data);
      }
    });
  }
}

seed(console.log);