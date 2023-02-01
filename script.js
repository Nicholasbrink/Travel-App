
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