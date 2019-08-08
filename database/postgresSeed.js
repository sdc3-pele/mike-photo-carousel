const { Client } = require('pg')
const client = new Client(
  //for local, just set database to SDC
  {
    user: 'power_user',
    database: 'postgres',
    password: '',
    host: 'ec2-18-191-45-136.us-east-2.compute.amazonaws.com',
    port: '5432',
    //ssl: true

  }
)
client.connect()

client.query(`DROP TABLE IF EXISTS urls`)

client.query(`CREATE TABLE urls (
  id serial NOT NULL,
  url character varying(50),
  CONSTRAINT urls_pkey PRIMARY KEY (id)
)`);


//used SCP to load EC2 server
// client.query(`COPY urls(url) FROM STDIN DELIMITER ',' CSV HEADER`,(err, res) => {
//   console.log(err, res);
// });

//'/Users/henrymattoon/classwork/course/SDC/mike-photo-carousel/data.csv'
