var map,
    marker;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.051850, lng: -117.555965},
    zoom: 13
  });

  map.setOptions({
    mapTypeControl: false,
    navigationControl: false,
    scaleControl: false,
    draggable: false,
    zoomControl: false,
    disableDoubleClickZoom: true,
    scrollWheel: false
  });

  marker = new google.maps.Marker({
    position: {lat: 34.051850, lng: -117.555965},
    map: map,
    title: 'Bridgeway Forklift & Training Services'
  });
}