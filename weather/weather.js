const request = require('request');



var getWeather = (lat, lng, callback) => {
  var requrl = `https://api.darksky.net/forecast/331d302dbebff3758ddf9573fa80aac3/${lat},${lng}`;
  request({
    url : requrl,
    json : true
  }, (error, response, body) => {
    if (error) {
      callback('Sem acesso a internet!');
    } else if (body.statusCode === 200) {
      callback(undefined, {
        Temperatura: body.currently.temperature,
        Sensação: body.currently.aparentTemperature
      });
    } else {
      callback(body.statusCode);
    }
  });
};

module.exports.getWeather = getWeather;
