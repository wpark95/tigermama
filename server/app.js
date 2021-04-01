const express = require('express');
const path = require('path');

const app = express();
const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');
const indexHTML = path.join(__dirname, '..', 'client', 'dist', 'index.html');

app.use(express.static(DIST_DIR));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.sendFile(indexHTML, (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

module.exports = app;
