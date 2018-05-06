console.log('================================================');
console.log('               Programa do tempo');
console.log(' ');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options ({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Endereço que deseja o clima',
      string: true
    }
  })
  .help('help','h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(`Endereço: ${results.address}`);
    console.log(`Latitude: ${results.latitude}   |   Longitude: ${results.longitude}`);
    console.log(' ');
    weather.getWeather (results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        var tempcelsius = (5 * weatherResults.temperature - 160)/9;
        var senscelcius = (5 * weatherResults.apparentTemperature - 160)/9;
        console.log(`A temperatura é de ${tempcelsius.toFixed(0)} °C, sensação de ${senscelcius.toFixed(0)} °C e o`);
        console.log(`clima está ${weatherResults.summary}.`);
      }
    });
  }
});
