const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['h1', 'h2'], localDataCenter: 'datacenter1', keyspace: 'ks1' });

console.log('test');




const getAllPhotos = (x) =>{
  //const queryStr = 'select photo_urls from products where product_id=?;';
  //const params = id;
  return new Promise((resolve, reject) => {


  });
}


module.exports = {getAllPhotos} ;
