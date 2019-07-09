const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

// app.use(bodyParser.json());
app.use(express.static('./client/dist'));

// get request at specific end point
app.get('/:product_id', (req, res) => {
  res.send('hi');
});

app.listen(port, () => console.log(`Listening on port ${port}`));