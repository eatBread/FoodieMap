function initMap(){
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map($('#map')[0], {
        zoom: 4,
        center: aluru
    });
    var marker = new google.maps.Marker({
        position: aluru,
        map: map
    });
}
