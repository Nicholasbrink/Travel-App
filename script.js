$("#images").empty();
$("#map").hide();



$("#currencybtn").click("submit", function (event) {
  event.preventDefault();
  console.log("I am being called when page loaded");
  var sourceCurreny = $("#currencyFrom").val().trim();
  var desireCurrency = $("#currencyTo").val().trim();
  var amount = $("#amount").val().trim();
  console.log(sourceCurreny);
  var desireAmount = null;
  const options2 = {
    method: "GET",
    url: "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency",
    params: { have: sourceCurreny, want: desireCurrency, amount: amount },
    headers: {
      "X-RapidAPI-Key": "aab8b82cf7mshebb7e509a85d587p187437jsnd8dbc7da95b1",
      "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
    },
  };

  axios
    .request(options2)
    .then(function (response) {
      console.log(response.data.new_amount);
      $("#new_amount").val(response.data.new_amount);
    })
    .catch(function (error) {
      console.error(error);
    });
});


$(".subModal").on("click", function(event){

  window.location.href = "thankYou.html";
  
})

var lat = 0;
var lon = 0;
var map;

// Event listener for weather on form
document
  .querySelector("#submit-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    $("#map").show();

    let apiKey = "b5657f205b6b0f7351867ba9e56f2a2c";

    let searchInput = $("#searchCity").val();

    localStorage.setItem("searchCity",searchInput);
    $("#searchCity").empty();

    // searchInput = charAt(0).toUpperCase() + searchInput.slice(1);

    imageGenerator(searchInput);

    let countryQueryUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&limit=1&appid=${apiKey}`;

    $.ajax({ url: countryQueryUrl }).then(function (response) {
      lat = response[0].lat;
      lon = response[0].lon;

      loadMap(lat, lon);

      let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`;

      $.ajax({ url: queryUrl }).then(function (weatherResponse) {
        document.querySelector("#weatherinfo").innerHTML = ""
        const weatherList = weatherResponse.list;
        const weatherToday = weatherList[0];
        const icon = weatherToday.weather[0].icon + "@2x.png";

        document.querySelector(".icon").src = "";
        document.querySelector(".icon").append(icon);
        const searchPlace = searchInput.charAt(0).toUpperCase()+searchInput.slice(1);

        document.querySelector("#cityName").innerHTML = "";
        document
          .querySelector("#cityName")
          .append("Todays Weather in " + searchPlace + " ");

        document.querySelector("#temp").innerHTML = "";
        document
          .querySelector("#temp")
          .append("Temperature: " + weatherToday.main.temp.toFixed(1) + " °C");

        document.querySelector("#wind").innerHTML = "";
        document
          .querySelector("#wind")
          .append("Wind: " + weatherToday.wind.speed + " KPH");
        document.querySelector("#humidity").innerHTML = "";
        document
          .querySelector("#humidity")
          .append("Humidity: " + weatherToday.main.humidity + " %");
      });
    });
    console.log(lat, lon);
  });

console.log(lat, lon);

// Leaflet api for map
var OpenStreetMap = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }
);

window.onload = loadMap(lat, lon);

// Function for loading map unto leaflet api
function loadMap(latitude, longitude) {
  if (map) {
    map.remove();
  }
  map = L.map("map", {
    scrollWheelZoom: false,
    center: [latitude, longitude],
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

// function for generating images
function imageGenerator(location) {
  const API_KEY = "33298605-dbd0a27598c1d9d88adc9dbe1";
  var URL =
    "https://pixabay.com/api/?key=" +
    API_KEY +
    "&q=" +
    encodeURIComponent(location); //create user-search ID on HTML and create a variable in JS to link to this element
  $.getJSON(URL, function (data) {
    console.log(data);

    $("#images").empty();

    for (let i = 0; i < 5; i++) {
      var randomIndex = Math.floor(Math.random() * data.hits.length);
      var url = data.hits[randomIndex].previewURL;

      $("#images").append(
        `<div class="card" style="width: 18rem;">
                        <img src="${url}" class="card-img-top" alt="${location} ${randomIndex}">
                                <div class="card-body">
                                    <h5 class="">${data.hits[randomIndex].tags}</h5>
                                </div>
                    </div>
                `
      );
    }

    // var randomIndex = Math.floor(Math.random() * data.hits.length);
    // $("body").css({
    //   background: `url(${data.hits[randomIndex].previewURL})`,
    //   "background-size": "cover",
    // });
    // randomIndex = Math.floor(Math.random() * data.hits.length);
    // $(".jumbotron").css({
    //   background: `url(${data.hits[randomIndex].previewURL})`,
    //   "background-size": "cover",
    // });
  });
}

const searchHistory=localStorage.getItem("searchCity")||null;
if( searchHistory !==null){
  $("#searchCity").val(searchHistory);
  document.querySelector("#submit-form").dispatchEvent(new Event('submit'));

}
