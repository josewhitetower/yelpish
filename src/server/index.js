/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config({ path: '.env.local' });
const express = require('express');
const cors = require('cors');

const axios = require('axios');

const app = express();
const port = 3000;

app.use(cors());
// parse application/json
app.use(express.json());

app.post('/', (req, res) => {
  axios({
    url: 'https://api.yelp.com/v3/graphql',
    method: 'post',
    headers: {
      'Content-Type': 'application/graphql',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    data: req.body.query,
  }).then(({ data }) => {
    res.send(data);
  }).catch((e) => {
    console.error({ e: e.message });
    res.sendStatus(e.response.status).send(e.response.statusTex);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
