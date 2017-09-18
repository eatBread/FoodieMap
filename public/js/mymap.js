var DEFAULT_ZOOM = 10;
var GOOGLE_API_KEY = 'AIzaSyAcEOTH2FqnbaDecCEJOyvoIj8bYuRFbR0';

$(function(){
function initMap(){
    var position = {
    	lat: 40.623290,
    	lng: -74.024127
    };
    var map = new google.maps.Map($('#map')[0], {
        zoom: DEFAULT_ZOOM,
        center: position
    });
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });

    $.ajax({
        url: '/nearby_search',
        data: {
            'location': position.lat + ',' + position.lng,
            'type': 'restaurant',
            'key': GOOGLE_API_KEY,
            'radius': 500
        },
        success: function (data) {
            debugger;
        },
        failure: function (data) {
            debugger;
        }
    });
}
initMap();
});
