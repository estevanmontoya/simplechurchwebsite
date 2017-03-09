const express = require('express');

const app = express();

// SET views
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// USE public
app.use(express.static(__dirname + '/public'));
// GET routes

app.get('/', (req, res) => {
  res.send('Hi there');
})

//LISTEN port

app.listen(3000, () => {
  console.log('Site running at http://localhost:3000');
});