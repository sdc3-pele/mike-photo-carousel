require('newrelic');
const express = require('express');

//const {cassGetAll, cassPost, cassPut, cassDelete} = require('./controllers/photos.js');
const {pgGetAll, pgPost, pgPut, pgDelete} = require('./controllers/photosPG.js');

const app = express();
const port = 3001;
const db = require('../database/index.js');

app.use('/:id', express.static('./client/dist'));

app.get('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  pgGetAll(id, (err, data) => {
    if(err) console.log(err);
    console.log(data);
    res.send(data).end();
  });
});


app.post('/api/photos', (req, res) => {
  const value = req.query.val;
  pgPost(value, (err, data) => {
    console.log('data is: ' + data);
    res.end();
  });
});

app.put('/api/photos/:id', (req, res) => {
  const value = req.query.val;
  const { id } = req.params;
  pgPut(id, value, (err, data)=>{
    console.log(err, data);
    res.end();
  });
});

app.delete('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  pgDelete(id, (err, data) => {
    console.log(err, data);
    res.end()
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
