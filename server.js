var express = require('express');
var QRCode = require('qrcode');
var app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

function totp(res, name, secret) {
  var qrQata = `otpauth://totp/${encodeURIComponent(name)}?secret=${encodeURIComponent(secret)}`;
  QRCode.toFileStream(res, qrQata);  
}

app.get("/totp/:name/:secret", function (req, res) {
  totp(res, req.params.name, req.params.secret)
});

app.get("/totp/:name", function (req, res) {
  totp(res, req.params.name, req.query.secret);
});


app.get("/totp", function (req, res) {
  totp(res, req.query.name, req.query.secret);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
