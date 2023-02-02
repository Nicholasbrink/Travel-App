// Leaflet api for map

var lat = -27.743040084838867
var long = 23.01875114440918

var OpenStreetMap = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }
);

window.onload = function () {
  var map = L.map("map", {
    center: [lat, long],
    zoom: 13,
    maxBounds: [
      [-120, -220],
      [120, 220],
    ],
    layers: [OpenStreetMap],
  });

  var baseMaps = {
    "OSM Mapnick": OpenStreetMap,
  };

  L.control.layers(baseMaps).addTo(map);

  map.addLayer(OpenStreetMap);

}

  // currency exchange api - exchange
  const options2 = {
    method: "GET",
    url: "https://currency-exchange.p.rapidapi.com/exchange",
    params: { from: "SGD", to: "MYR", q: "1.0" },
    headers: {
      "X-RapidAPI-Key": "12226b39a9mshfa23fe1cdb616ccp10fb0bjsnd8f20f98485c",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };

  axios
    .request(options2)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  // Travel Places API - JS Axois

  const options3 = {
    method: "POST",
    url: "https://travel-places.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "12226b39a9mshfa23fe1cdb616ccp10fb0bjsnd8f20f98485c",
      "X-RapidAPI-Host": "travel-places.p.rapidapi.com",
    },
  };

//   axios
//     .request(options3)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });

//Sample query (nature places near San Francisco:
//{ getPlaces(categories:["NATURE"],lat:37,lng:-122,maxDistMeters:50000) { name,lat,lng,abstract,distance,categories } }

//PIXELBAY API
// Documentation : https://pixabay.com/api/docs/

//Your API key: 33298605-dbd0a27598c1d9d88adc9dbe1
// PIXELBAY API-Host: https://pixabay.com/api/

const options4 = {
  method: "POST",
  url: "https://pixabay.com/api/",
  headers: {
    "X-RapidAPI-Key": "33298605-dbd0a27598c1d9d88adc9dbe1",
    "X-RapidAPI-Host": "https://pixabay.com/api/",
  },
};

// photos: https://pixabay.com/api/?key=33298605-dbd0a27598c1d9d88adc9dbe1&q=yellow+flowers&image_type=photo
// Videos: https://pixabay.com/api/videos/?key=33298605-dbd0a27598c1d9d88adc9dbe1&q=yellow+flowers

const API_KEY = "33298605-dbd0a27598c1d9d88adc9dbe1";
var URL =
  "https://pixabay.com/api/?key=" +
  API_KEY +
  "&q=" +
  encodeURIComponent("user-search"); //create user-search ID on HTML and create a variable in JS to link to this element
$.getJSON(URL, function (data) {
  if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function (i, hit) {
      console.log(hit.pageURL);
    });
  else console.log("No hits");
});
