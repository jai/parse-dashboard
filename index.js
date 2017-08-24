var express = require('express');
var ParseDashboard = require('parse-dashboard');

var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": "https://ramen-beast-parse-server-test.herokuapp.com/parse",
      "appId": "0JaZQrVZ27THPwguhl3M0kiPgCpoiKLRgDYk4H2j",
      "masterKey": "7aHFy7s7DTdQJiGJYgqsowcCbxLoJKh3",
      "appName": "ramen-beast"
    }
  ]
});

var app = express();

// make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);

var httpServer = require('http').createServer(app);
var port = process.env.PORT || 4040;
httpServer.listen(port);