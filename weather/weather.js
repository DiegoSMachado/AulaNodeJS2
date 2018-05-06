const request = require('request');

var getWeather = (lat, lng, callback) => {
  var requrl = `https://api.darksky.net/forecast/331d302dbebff3758ddf9573fa80aac3/${lat},${lng}`;
  request({
    url : requrl,
    json : true
  }, (error, response, body) => {
    if (error) {
      callback('Sem acesso a internet!');
    } else {
      callback(undefined,{
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        summary: body.currently.summary
      });
    }
  });
};

module.exports.getWeather = getWeather;
