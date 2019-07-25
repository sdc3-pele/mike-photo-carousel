const express = require('express');

const app = express();
const port = 3001;
const db = require('../database/index.js');

app.use('/:id', express.static('./client/dist'));

app.get('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  db.getAllPhotos(id)
    .then(urls => res.send(urls).end())
    .catch(err => console.log(err));
  //console.log(db.getAllPhotos(1));
});

app.post('/api/photos', (req, res) => {
  //db post function
});

app.put('/api/photos/:id', (req,res) => {
  const { id } = req.params;
  //db put function
});

app.delete('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  //db delete function
})


app.listen(port, () => console.log(`Listening on port ${port}`));
