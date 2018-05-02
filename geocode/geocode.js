const request = require('request');

var geocodeAddress = (address, callback) => {
  var encAddress = encodeURIComponent(address);
  var beginUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  var requestUrl = beginUrl + encAddress;
  var errorMessage = '';
  var results = {};

  request({
    url: requestUrl,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Servidor da Google fora do ar!');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Endereço não encontrado!');
    } else if (body.status === 'OVER_QUERY_LIMIT') {
      callback('Muitas Pesquisas! Por favor esperar um pouco!');
    } else if (body.status === 'OK') {
      callback(undefined,{
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    } else {
      callback(body.status);
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;
