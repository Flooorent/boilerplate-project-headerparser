// init project
var express = require('express');
const httpStatus = require('http-status')

var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', function(req, res) {
    //console.log(req.headers)
   //console.log(req.header['x-forwarded-for'])

    const ipaddress = req.ip
    const language = req.headers['accept-language']
    const software = req.headers['user-agent']

    res.status(httpStatus.OK).json({ ipaddress, language, software })
})

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

module.exports = app;
