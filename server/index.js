const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const db = require('../database/index.js');

// app.use(bodyParser.json());
app.use(express.static('./client/dist'));

// get request at specific end point
app.get('/:product_id', (req, res) => {
  // console.log(req.params.product_id);
  let id = req.params.product_id;
  db.getAllPhotos(id)
    .then(urls => res.send(urls))
    .catch(err => console.log(err))
});

app.listen(port, () => console.log(`Listening on port ${port}`));