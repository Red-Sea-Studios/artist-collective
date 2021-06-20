// Imports
const path = require('path');
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Set Views
app.set('views', path.join(__dirname, '/public'));
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('homepage');
})

// SWIMMING FAILURE
app.get('/swimmingfailure', (req, res) => {
  res.render('swimmingfailure/views/index');
})
app.get('/swimmingfailure/music', (req, res) => {
  res.render('swimmingfailure/views/music');
})
app.get('/swimmingfailure/art', (req, res) => {
  res.render('swimmingfailure/views/art');
})
app.get('/swimmingfailure/photos', (req, res) => {
  res.render('swimmingfailure/views/photos');
})
app.get('/swimmingfailure/tech', (req, res) => {
  res.render('swimmingfailure/views/tech');
})
app.get('/swimmingfailure/writing', (req, res) => {
  res.render('swimmingfailure/views/writing');
})

// Listen
app.listen(PORT, () => console.info(`App listening on port ${PORT}`))