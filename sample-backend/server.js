'use strict';

const express = require('express');

const PORT = 8070;
const HOST = '0.0.0.0';
const REST_URL = 'http://sample-restapi2.ecs.internal:8080';
const REST_API_PATH = '/api/v1/date';

const app = express();

const axiosBase = require('axios');
const axios = axiosBase.create({
  baseURL: REST_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});


app.get('/api', (req, res) => {
  axios.get(REST_API_PATH)
  .then(function(response) {
    res.send(response.data);
  })
  .catch(function(error) {
    console.log('ERROR in Backend');
    console.log(error);
  });
});

app.get('/', (req, res) => {
    res.send("okdayo");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
