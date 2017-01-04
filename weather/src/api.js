import APIKEY from './apikey.js';
import _ from 'lodash';

var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=' + APIKEY;

var kelvinToCF = function(kelvin) {
  var c = Math.round((kelvin - 273.15));
  var f = Math.round((kelvin - 273.15) * 1.8 + 32);
  return `${c} ˚C / ${f} ˚F`;
}

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  console.log('GET ' + url);
  return fetch(url).then(function(response) {
    console.log('REQUESTED', url, response);
    return response.json()
  })
  .then(function(json) {
    return {
      city: json.name,
      temperature: kelvinToCF(json.main.temp),
      description: _.capitalize(json.weather[0].description)
    }
  });

}
