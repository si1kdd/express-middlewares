const express = require('express');
const app = express();
const middleWares = require('./index.js');
const {cors, tcolor, rateLimiter} = middleWares;

app.set('port', process.env.PORT || 3000);

//  Disable X-Powered-By Header
app.disable('x-powered-by');

app.listen(app.get('port'), function() => {
  console.log('Http server is listening on ' + app.get('port'));
});

app.use(cors());
app.use(tcolor());
app.use(rateLimiter());

app.get('/', function(req, res) => {
  res.send('Demo Using');
});
