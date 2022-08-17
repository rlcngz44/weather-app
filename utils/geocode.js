const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoicmxjbmd6NDQiLCJhIjoiY2w2dWh5NmVmMWVoMjNkdGNyb2h3eHM1MiJ9.B5vbxTjkEWesLnXm6X1Pew&limit=1";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect coordinate services", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to to find the location. Try again", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
