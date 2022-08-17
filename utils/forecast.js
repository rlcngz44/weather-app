const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=046e2a9cebd90c1a6bfdd729db82ff33&query=${latitude},${longitude}&units=m`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect coordinate services", undefined);
    } else if (body.error) {
      callback("Unable to to find the location. Try another search", undefined);
    } else {
      callback(undefined, {
        current_weather: body.current.weather_descriptions[0],
        feelslike: body.current.feelslike,
        country: body.location.country,
        region: body.location.region,
      });
    }
  });
};

module.exports = forecast;
