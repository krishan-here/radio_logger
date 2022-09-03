const express = require('express');
const app = express();
const router = express.Router()
const hostname = '127.0.0.1';
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser'); // Middleware
const componentsDirUrl = './src/client/src/components';

app.use(bodyParser.urlencoded({ extended: false }))

app.set('port', (process.env.PORT || 3000));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/dashboard', (req, res) => {
  res.sendFile(componentsDirUrl + '/dashboard.html', { root: __dirname });
});

app.get('/contestlog', (req, res) => {
  res.sendFile(componentsDirUrl + '/contestlog.html', { root: __dirname });
});

app.get('/swllog', (req, res) => {
  res.sendFile(componentsDirUrl + '/swllog.html', { root: __dirname });
});

app.get('/signin', function(req, res) {
  res.sendFile(componentsDirUrl + '/signin.html', { root: __dirname });
});

app.get('/hamlog', function(req, res) {
  res.sendFile(componentsDirUrl + '/hamlog.html', { root: __dirname });
});

app.get('/signup', function(req, res) {
  res.sendFile(componentsDirUrl + '/signup.html', { root: __dirname });
});

app.post('/login', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

module.exports = router;

