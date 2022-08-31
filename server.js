const express = require('express');
const app = express();
const router = express.Router()
const hostname = '127.0.0.1';
const port = 3000;
const http = require('node:http');
const { restart } = require('nodemon');
const path = require('path');
const bodyParser = require('body-parser'); // Middleware

const server = http.createServer(function (req, res) {
  restart.writeHead(200, {'Content-Type': 'text/plain'});
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});
    server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.use(bodyParser.urlencoded({ extended: false }))

app.set('port', (process.env.PORT || 3000));

app.listen(3000)

server.listen(port, hostname, function(){
  console.log(`Server running at http://{hostname}:${port}/`);
})
app.listen(app.get('port'), function() {
  console.log('Server started on port '+app.get('port'));
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

router.get('/', function(req, res) {
  res.send('Wiki home page');
});

// About page route
router.get('/about', function(req, res) {
  res.send('About this wiki');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/src/client/src/components/signin.html');
});

app.post('/login', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});

module.exports = router;

