var express = require('express');
var cors = require('cors');
const multer = require('multer')
const bp = require('body-parser');
const upload = multer({ dest: 'uploads/' })
require('dotenv').config()

var app = express();

app.use(cors());
app.use(bp.urlencoded());
app.use(bp.json());
app.use('/public', express.static(process.cwd() + '/public'));

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const { originalname, mimetype, size } = req.file;
  res.json({ name: originalname, type: mimetype, size });
});

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const port = 8000
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
