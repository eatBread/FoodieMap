//mymap.js
$(function(){
    var GOOGLE_API_KEY = 'AIzaSyAcEOTH2FqnbaDecCEJOyvoIj8bYuRFbR0';

    var DEFAULT_ZOOM = 15;
    var DEFAULT_RADIUS = 500;
    var DEFAULT_LAT = 40.623290;
    var DEFAULT_LNG = -74.024127;

    function initMap(){
       var position = new google.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG);

       var map = new google.maps.Map($('#map')[0], {
        zoom: DEFAULT_ZOOM,
        center: position
       });

       var params = {
         'location': position,
         'radius': DEFAULT_RADIUS,
         'type': 'restaurant'
       }

       var service = new google.maps.places.PlacesService(map);

       service.nearbySearch(params, function(results, status){
         if(status == google.maps.places.PlacesServiceStatus.OK){
            var current_infowindow;

            _.each(results, function(place){
                var marker = new google.maps.Marker({
                    position: {
                        'lat': place.geometry.location.lat(),
                        'lng': place.geometry.location.lng()
                    },
                    map: map
                });


                var infowindow_content = 
                '<div id = "content">' +
                '<h1 class = "firstHeading">' + place.name + '</h1>' +
                '</div>';
                var infowindow = new google.maps.InfoWindow({
                    content: infowindow_content
                });

                marker.addListener('click',function(){
                    if(current_infowindow) {
                        current_infowindow.close();
                    }
                    infowindow.open(map, marker);
                    current_infowindow = infowindow;
                    showDetailedInfo(place);
                });
            });
        }
    });
        
        function showDetailedInfo(place){
            var params = {
                placeId: place['place_id']
            };
            service.getDetails(params, function(place){
                if(place.photos[0]){
                    $('#hero-header-wrapper img').attr('src', place.photos[0].getUrl({
                        'maxWidth': 408,
                        'maxHeight': 407
                    }));
                }
                $('.place-name').text(place['name']);
                $('.place-review-score').text(place['rating']);
                $('.place-type').text(place['types'][0]);
                $('#place-info-wrapper').show();
            });
        }


       // $.ajax({
       //  url: '/nearby_search',
       //  data: {
       //      'location': position.lat + ',' + position.lng,
       //      'type': 'restaurant',
       //      'key': GOOGLE_API_KEY,
       //      'radius': DEFAULT_RADIUS
       //  },
       //  success: function (data) {
       //      debugger;
       //  },
       //  failure: function (data) {
       //      debugger;
       //  }
       //  });
   }
   initMap();
});
