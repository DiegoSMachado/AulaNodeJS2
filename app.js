const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const forecast = require('./geocode/forecast');

const argv = yargs
  .options ({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
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
    console.log(`Latitude: ${results.latitude}`);
    console.log(`Longitude: ${results.longitude}`);
  }
});

// forecast.getForecast(pos, (errorMessage, resultsForecast)) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(`Tempo: ${resultsforecast.forecast}`);
//   }
// });
