// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const request = require('request');



// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(express.static('/tmp'));

// http://expressjs.com/en/starter/basic-routing.html
// app.get("/", function (request, response) {
//   response.sendFile(__dirname + '/views/index.html');
// });

request('https://s3-us-west-2.amazonaws.com/stcom-public-resources/result.json', function(err, res, body) {
  console.log(body);
})

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});