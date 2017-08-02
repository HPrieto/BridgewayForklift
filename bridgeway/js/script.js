var map,
    marker;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.053389, lng: -117.556558},
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
    position: {lat: 34.053389, lng: -117.556558},
    map: map,
    title: 'Bridgeway Forklift & Training Services'
  });
}