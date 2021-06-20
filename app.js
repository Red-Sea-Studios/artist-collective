// Imports
const path = require('path');
const express = require('express')
const app = express()
const port = 5000

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Set Views
app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' });
})
app.get('/music', (req, res) => {
  res.render('music');
})
app.get('/art', (req, res) => {
  res.render('art');
})
app.get('/photos', (req, res) => {
  res.render('photos');
})
app.get('/tech', (req, res) => {
  res.render('tech');
})
app.get('/writing', (req, res) => {
  res.render('writing');
})

// Listen
app.listen(port, () => console.info(`App listening on port ${port}`))