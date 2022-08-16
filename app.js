const request = require("request");
const geocode = require("./utils/geocode");
// const url =
//   "http://api.weatherstack.com/current?access_key=046e2a9cebd90c1a6bfdd729db82ff33&query=&units=m";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect weather service");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(response.body);
//     const temp = response.body.current.temperature;
//     const feelsLike = response.body.current.feelslike;
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ". It is currently " +
//         temp +
//         " degrees out. It feels like " +
//         feelsLike +
//         " degrees."
//     );
//   }
// });

// const geocodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/amsterdam.json?access_token=pk.eyJ1Ijoicmxjbmd6NDQiLCJhIjoiY2w2dWh5NmVmMWVoMjNkdGNyb2h3eHM1MiJ9.B5vbxTjkEWesLnXm6X1Pew&limit=1";
// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect coordinate services");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find coordinates");
//   } else {
//     const longitude = response.body.features[0].center[0];
//     const latitude = response.body.features[0].center[1];
//     console.log(longitude, latitude);

//   }
// });

geocode("Boston", (error, data) => {
  console.log("error", error);
  console.log("Data", data);
});
