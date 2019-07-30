const express = require('express');
const {cassGetAll, cassPost, cassPut, cassDelete} = require('./controllers/photos.js');

const app = express();
const port = 3001;
const db = require('../database/index.js');

app.use('/:id', express.static('./client/dist'));

app.get('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  cassGetAll(id, (err, data) => {
    if(err) console.log(err);
    console.log(data);
    res.send(data).end();
  });
  // db.getAllPhotos(id)
  //   .then(urls => res.send(urls).end())
  //   .catch(err => console.log(err));
});


app.post('/api/photos', (req, res) => {
  cassPost();
});

app.put('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  cassPut(id);
});

app.delete('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  cassDelete(id);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
