const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=046e2a9cebd90c1a6bfdd729db82ff33&query=amsterdam&units=m";

request({ url: url, json: true }, (error, response) => {
  //   console.log(response.body.current);
  const temp = response.body.current.temperature;
  const feelsLike = response.body.current.feelslike;
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is currently " +
      temp +
      " degrees out. It feels like " +
      feelsLike +
      " degrees."
  );
});

//Challenge! Print a small forecast to the user.\
//1. Print "It is currently 29 degrees out. There is 0% chance of rain"
