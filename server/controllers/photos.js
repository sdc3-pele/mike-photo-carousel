const cassandra = require('cassandra-driver');

const Client = cassandra.Client;
const client = new Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'sdc_photos',
});

exports.cassGetAll = (id, callBack) => {
  console.log('getting all');

  client.execute(`SELECT * FROM photos_urls WHERE id = ${id}`, (err, data) => {
    if(err) callBack(err, null);
    //console.log(JSON.parse(data.rows[0].urls))
    let parsedUrls = JSON.parse(data.rows[0].urls);
    let expandedUrls = parsedUrls.map((urlId) => {
      return `https://sdc3-pele.s3-us-west-1.amazonaws.com/photo${urlId}.jpeg`
    });
    data.rows[0].urls = JSON.stringify(expandedUrls);
    //console.log(data.rows[0]);
    callBack(null, data.rows);
  });
}

exports.cassPost = () => {
  console.log('posting');
}

exports.cassPut = (id) => {
  console.log('put');
}

exports.cassDelete = (id) => {
  console.log('delete');
}










