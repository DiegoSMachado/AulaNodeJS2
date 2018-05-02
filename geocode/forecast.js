// const request = require('request');
//
// var getForecast = (pos, callback) => {
//   var requrl = `https://api.darksky.net/forecast/331d302dbebff3758ddf9573fa80aac3/${pos}`;
//
//   request({
//     url : requrl,
//     json : true
//   }, (error, response, body) => {
//     if (error) {
//       callback('Sem acesso a internet!');
//     } else if (body.status === 'OK') {
//       callback(undefined, JSON.stringify(body));
//     } else {
//       callback(body.status);
//     }
//   });
// };
//
// module.exports.getForescast = getForecast;
