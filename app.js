const express = require('express');

const app = express();

const apiRoute = '/api/v1/';

app.use(express.json());

module.exports = app;