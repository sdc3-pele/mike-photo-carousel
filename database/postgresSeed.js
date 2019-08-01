const { Client } = require('pg')
const client = new Client(
  {database: 'SDC'}
)
client.connect()

client.query(`DROP TABLE IF EXISTS urls`)

client.query(`CREATE TABLE urls (
  id serial NOT NULL,
  url character varying(50),
  CONSTRAINT urls_pkey PRIMARY KEY (id)
)`);

client.query(`COPY urls(url) FROM '/Users/henrymattoon/classwork/course/SDC/mike-photo-carousel/data.csv' DELIMITER ',' CSV HEADER`,(err, res) => {
  console.log(err, res);
});