console.log('================================================');
console.log('               Programa do tempo');
console.log(' ');

const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .option({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Endereço que deseja previsão.',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

var encodeAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;

axios.get(geocodeUrl).then((response) => {
  if        (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Endereço não encontrado');

  } else if (response.data.status === 'OVER_QUERY_LIMIT') {
    throw new Error('Muitas requisições no servidor');

  } else if (response.data.status === 'OK') {
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    console.log(lat,lng);
    var weatherUrl = `https://api.darksky.net/forecast/331d302dbebff3758ddf9573fa80aac3/${lat},${lng}`;
    axios.get(weatherUrl).then((weatherResponse) => {
      console.log(response.data.results[0].formatted_address);
      var tempcelsius = (5 * weatherResponse.currently.temperature - 160)/9;
      var senscelcius = (5 * weatherResponse.currently.apparentTemperature - 160)/9;
      console.log(`A temperatura é de ${tempcelsius.toFixed(0)} °C, sensação de ${senscelcius.toFixed(0)} °C e o`);
      console.log(`clima está ${weatherResponse.currently.summary}.`);
    }).catch((e) => {
      console.log('Não conectou ao servidor');
    });
  } else {
    throw new Error (response.data.status);
  }
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Não conectou ao servidor');
  } else {
    console.log(e.message);
  }
});
