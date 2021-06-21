// Imports
const path = require('path');
const fs = require('fs');
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
  const art = getImagesFromDir('public/swimmingfailure/media/art');
  res.render('swimmingfailure/views/art', { art });
})
app.get('/swimmingfailure/photos', (req, res) => {
  const photos = getImagesFromDir('public/swimmingfailure/media/photos');
  res.render('swimmingfailure/views/photos', { photos });
})
app.get('/swimmingfailure/tech', (req, res) => {
  res.render('swimmingfailure/views/tech');
})
app.get('/swimmingfailure/writing', (req, res) => {
  res.render('swimmingfailure/views/writing');
})

// S4LT
app.get('/s4lt', (req, res) => {
  res.render('s4lt/views/index');
})
app.get('/s4lt/music', (req, res) => {
  res.render('s4lt/views/music');
})
app.get('/s4lt/art', (req, res) => {
  res.render('s4lt/views/art');
})
app.get('/s4lt/writing', (req, res) => {
  res.render('s4lt/views/writing');
})

// RDCFLRA
app.get('/rdcflra', (req, res) => {
  res.render('rdcflra/views/index');
})

// CANNERY
app.get('/cannery', (req, res) => {
  res.render('cannery/views/index');
})

// \o_nick_o/ 
app.get('/nick', (req, res) => {
  res.render('nick/views/index');
})

// GR8 PINK 
app.get('/gr8pink', (req, res) => {
  res.render('gr8pink/views/index');
})

// Dark Molin
app.get('/darkmolin', (req, res) => {
  res.render('darkmolin/views/index');
})

// Listen
app.listen(PORT, () => console.info(`App listening on port ${PORT}`))



// dirPath: target image directory
function getImagesFromDir(dirPath) {
  // All iamges holder, defalut value is empty
  let allImages = [];
  // Iterator over the directory
  let files = fs.readdirSync(dirPath);
  // Iterator over the files and push jpg and png images to allImages array.
  for (file of files) {
      let fileLocation = path.join(dirPath, file);
      var stat = fs.statSync(fileLocation);
      if (stat && stat.isDirectory()) {
          getImagesFromDir(fileLocation); // process sub directories
      } else if (stat && stat.isFile() && ['.jpg', '.png'].indexOf(path.extname(fileLocation)) != -1) {
          allImages.push(file); // push all .jpf and .png files to all images 
      }
  }

  // return all images in array formate
  return allImages;
}