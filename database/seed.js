// const mysql = require('mysql');
const mockData = require('./mockData.js');
const csv = require('fast-csv');
const {performance} = require('perf_hooks')
// const mysqlConfig = require('./config.js');

const cassandra = require('cassandra-driver');
const Client = cassandra.Client;
const client = new Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
})
const queryOptions = { prepare: true, consistency: cassandra.types.consistencies.one };

const queries = [
  { query: 'INSERT INTO sdc_photos.photos_urls (id, urls) VALUES (?, ?)',
     params: [ '1','hendrix']}
];
let query = 'DROP KEYSPACE IF EXISTS sdc_photos';
var t1;
var t0;
client.execute(query)
.then(()=>{
  t1 = performance.now();
})
.then(() => client.execute(`CREATE KEYSPACE sdc_photos WITH replication = {'class':'SimpleStrategy', 'replication_factor':3}`))
.then(() => client.execute('USE sdc_photos'))
.then(() => client.execute(`DROP TABLE IF EXISTS photos_urls`))
.then(() => client.execute(`CREATE TABLE photos_urls (id int, urls text, PRIMARY KEY(id))`))
.then(() => {
  let queries = []
  let percent = 1;
  let id = 1;
  let head = true;
  csv
    .parseFile('data.csv')
    .on('error', error => console.error(error))
    .on('data', row => {
      if(head === false){
        queries.push(
          { query: 'INSERT INTO sdc_photos.photos_urls (id, urls) VALUES (?, ?)',
          params: [ id, row[0]]}
        );
        id++;
        if(queries.length >= 100){
          client.batch(queries, queryOptions)
          .then(()=>{
            if ((percent / 1000) % 1 === 0) {
              console.log((percent / 1000) + '% done');
            };
            percent++;
            if(id > 10000000){
              t0 = performance.now();
              console.log("seeding took " + (-t1 + t0) + " milliseconds.");
            }
          })
          queries = [];
        }
      }
      head = false;
    })
    .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));
})
.catch((err) => console.log(err));
