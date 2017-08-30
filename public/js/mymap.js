var DEFAULT_ZOOM = 10;
var GOOGLE_API_KEY = 'AIzaSyAWnS2pfv6DIGVleFEcPME3bEQ0WAmQGBU';

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
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
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
