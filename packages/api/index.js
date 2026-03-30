const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/data', async (req, res) => {
  const response = await axios.get('https://api.example.com/data');
  res.json(response.data);
});

app.post('/login', (req, res) => {
  const token = jwt.sign({ user: 'test' }, 'secret', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = app;
