// Travel Places API - JS Axois

import axios from "axios";

const options = {
  method: "POST",
  url: "https://travel-places.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "61dda18eb2mshd59ef3cf518c795p1b5786jsn53af88ea6048",
    "X-RapidAPI-Host": "travel-places.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

//Sample query (nature places near San Francisco:
//{ getPlaces(categories:["NATURE"],lat:37,lng:-122,maxDistMeters:50000) { name,lat,lng,abstract,distance,categories } }

//PIXELBAY API
// Documentation : https://pixabay.com/api/docs/

//Your API key: 33298605-dbd0a27598c1d9d88adc9dbe1
// PIXELBAY API-Host: https://pixabay.com/api/

const options = {
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
