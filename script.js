// Leaflet api for map
var OpenStreetMap = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
  );
  
  window.onload = function() {
    var map = L.map("map", {
      center: [-27.743040084838867, 23.01875114440918],
      zoom: 13,
      // Values are x and y here instead of lat and long elsewhere.
      maxBounds: [[-120, -220], [120, 220]],
      layers: [OpenStreetMap
              ]
    })

    var baseMaps = {
        "OSM Mapnick": OpenStreetMap
      };
    
      L.control.layers(baseMaps).addTo(map);

      map.addLayer(OpenStreetMap);
    };

// currency exchange api - list quotes
// const options = {
//     method: 'GET',
//     url: 'https://currency-exchange.p.rapidapi.com/listquotes',
//     headers: {
//         'X-RapidAPI-Key': '12226b39a9mshfa23fe1cdb616ccp10fb0bjsnd8f20f98485c',
//         'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
//     }
//     };
    
//     axios.request(options).then(function (response) {
//         console.log(response.data);
//     }).catch(function (error) {
//         console.error(error);
//     });

// currency exchange api - exchange
const options2 = {
    method: 'GET',
    url: 'https://currency-exchange.p.rapidapi.com/exchange',
    params: {from: 'SGD', to: 'MYR', q: '1.0'},
    headers: {
      'X-RapidAPI-Key': '12226b39a9mshfa23fe1cdb616ccp10fb0bjsnd8f20f98485c',
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
  };
  
  axios.request(options2).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });