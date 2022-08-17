const request = require("request");

const forecast = (lat, lon, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=046e2a9cebd90c1a6bfdd729db82ff33&query=${lon},${lat}&units=m`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect coordinate services", undefined);
    } else if (response.body.error) {
      callback("Unable to to find the location. Try another search", undefined);
    } else {
      callback(undefined, {
        current_weather: response.body.current.weather_descriptions[0],
        feelslike: response.body.current.feelslike,
        country: response.body.location.country,
        region: response.body.location.region,
      });
    }
  });
};

module.exports = forecast;
