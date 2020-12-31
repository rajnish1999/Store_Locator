const NodeGeocoder = require('node-geocoder');

const options = {
  provider: "mapquest",

  // Optional depending on the providers
  //fetch: customFetchImplementation,
  apiKey: "daEOHlpjHtGSLG66snyM95tGsQdA8xbh", // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;