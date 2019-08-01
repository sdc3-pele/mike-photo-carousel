const { Client } = require('pg')
const client = new Client(
  {database: 'SDC'}
)
client.connect()


exports.pgGetAll = (id, callBack) => {
  //console.log('getting all');
  client.query(`SELECT url FROM urls WHERE id = ${id}`, (err, data) => {
    if(err) callBack(err, null);
    //console.log(data);
    let parsedUrls = JSON.parse(data.rows[0].url);
    //console.log('parsed urls is' + parsedUrls);
    let expandedUrls = parsedUrls.map((urlId) => {
      return `https://sdc3-pele.s3-us-west-1.amazonaws.com/photo${urlId}.jpeg`
    });
    data.rows[0].urls = JSON.stringify(expandedUrls);
    //console.log(data.rows[0]);
    callBack(null, data.rows);
  });
}

exports.pgPost = (value, callBack) => {
  console.log('posting' + value);
  client.query(`INSERT INTO urls (url) VALUES ('${value}')`, (err, data) => {
    if(err) console.log(err)
    callBack(null, data);
  });
}

exports.pgPut = (id, value, callBack) => {
  console.log('put');
  client.query(`update urls set url = '${value}' where id = ${id}`, (err, data) => {
    callBack(err,data);
  });
}

exports.pgDelete = (id, callBack) => {
  console.log('delete');
  client.query(`delete from urls where id = ${id}`, (err, data) => {
    callBack(err,data);
  });

}
