const request = require('request');

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=481%20Governador%20Portela%20Nova%20Igua%C3%A7u',
  json: true
}, (error, response, body) => {
  var address = JSON.stringify(body.results[0].formatted_address);
  var latitude = body.results[0].geometry.location.lat;
  var longitude = body.results[0].geometry.location.lng;
  console.log(address+' | '+latitude+' | '+longitude);
});
