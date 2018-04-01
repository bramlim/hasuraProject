var latitude;
var longitude;
var map; //store map
var marker; //store marker
var listOfUserMark = null;
var area; //for area outline
var currentRegion = null; //store current region
var latlngKorea = {lat: 34.061578, lng:-118.302273};
var latlngTokyo = {lat: 34.052319, lng:-118.239901};
var latlngMexican = {lat: 34.056945, lng:-118.238417};
var latlngChina = {lat: 34.062751, lng:-118.239281};
var areaKorea = [
  {lat: 34.0525754771699, lng: -118.3090782283946},
  {lat: 34.05262031932687, lng: -118.29157386243},
  {lat: 34.06895324862442, lng: -118.2916739097037},
  {lat: 34.06896951479911, lng: -118.3092087381458},
  {lat: 34.0525754771699, lng: -118.3090782283946}
];
var areaMexican = [
  {lat: 34.05650612681695, lng: -118.2411373518275},
  {lat: 34.05463914205682, lng: -118.2378981471605},
  {lat: 34.05806454181469, lng: -118.237121345533},
  {lat: 34.05825061460436, lng: -118.2378477338882},
  {lat: 34.0582802306055, lng: -118.2394871897288}
];
var areaTokyo = [
  {lat: 34.05145065582161, lng: -118.2423745920764},
  {lat: 34.04862006264664, lng: -118.2448108472322},
  {lat: 34.04548520376737, lng: -118.2378414782357},
  {lat: 34.0459850295026, lng: -118.2327067642357},
  {lat: 34.0482915868452, lng: -118.2326765697156},
  {lat: 34.04842721861537, lng: -118.2314246730252},
  {lat: 34.05207944281678, lng: -118.2297117982757},
  {lat: 34.05240645103302, lng: -118.2297031154803},
  {lat: 34.05368604356418, lng: -118.2378267674421},
  {lat: 34.0595168664503, lng:  -118.2466535046512},
  {lat: 34.06119396099356, lng: -118.2490145302973},
  {lat: 34.0611586031028, lng: -118.2498578974597},
  {lat: 34.05865116235591, lng: -118.2531419379177},
  {lat: 34.05145065582161, lng: -118.2423745920764}
];
var areaChina = [
    {lng: -118.2411670659619, lat: 34.05648669980661},
    {lng: -118.2394833855485, lat: 34.05822714767096},
    {lng: -118.2377826842755, lat: 34.05828487747829},
    {lng: -118.2369906663153, lat: 34.05806854110686},
    {lng: -118.2376586277279, lat: 34.05461286883442},
    {lng: -118.2245502232699, lat:34.05301968538861},
    {lng: -118.2233259216813, lat: 34.05328304010678},
    {lng: -118.2214767670942,lat: 34.05503652577663},
    {lng: -118.2200992963867,lat: 34.0554120656456},
    {lng: -118.2153554780725, lat: 34.05691835720618},
    {lng: -118.2159132216392, lat: 34.06185053840909},
    {lng: -118.2167482124848,lat: 34.06779949206755},
    {lng: -118.2191252470097,lat: 34.07242437631155},
    {lng: -118.219728618433, lat: 34.0735934092032},
    {lng: -118.2195150037874, lat: 34.07629608324},
    {lng: -118.2212715645936, lat: 34.07937976605676},
    {lng: -118.2237853647657, lat: 34.08095579808275},
    {lng: -118.2242760336571, lat: 34.08116664014705},
    {lng: -118.230706412415, lat: 34.07643218280269},
    {lng: -118.2343094181746, lat: 34.07310377161101},
    {lng: -118.2362287196334, lat: 34.0691212320007},
    {lng: -118.2419701871961, lat: 34.06564056260499},
    {lng: -118.2458440995358, lat: 34.06432334370453},
    {lng: -118.2470717495568, lat: 34.06359057915196},
    {lng: -118.2477309758191, lat: 34.06257479790401},
    {lng: -118.2456226221673, lat: 34.05984735651026},
    {lng: -118.2424954319285, lat: 34.05750652028782},
    {lng: -118.2411670659619, lat: 34.05648669980661}
];

function initMap() {
    latitude = 34.047336;
    longitude = -118.339229;
    var coord = {lat: latitude, lng: longitude};
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: coord
    });
  }


function zoomIn(line){

    var elem = document.getElementById('search');

    if(line === 'korea'){
        latitude = 34.061578;
        longitude = -118.302273;
        map.setCenter(latlngKorea);
        map.setZoom(14);
           area = new google.maps.Polygon({
           paths: areaKorea,
           strokeColor: '#FF0000',
           strokeOpacity: 0.8,
           strokeWeight: 2,
           fillColor: '#FF0000',
           fillOpacity: 0.35
        });
        area.setMap(map);
        currentRegion = 'Korea';
    }
    else if(line === 'tokyo'){
        latitude = 34.052319;
        longitude = -118.239901;
        map.setCenter(latlngTokyo);
        map.setZoom(15.5);
        currentRegion = 'tokyo';
        area = new google.maps.Polygon({
           paths: areaTokyo,
           strokeColor: '#FF0000',
           strokeOpacity: 0.8,
           strokeWeight: 2,
           fillColor: '#FF0000',
           fillOpacity: 0.35
        });
        area.setMap(map);
    }

    else if(line === 'mexican'){
        latitude = 34.056945;
        longitude = -118.238417;
        map.setCenter(latlngMexican);
        map.setZoom(17.2);
        currentRegion = 'mexican';
        var area = new google.maps.Polygon({
           paths: areaMexican,
           strokeColor: '#FF0000',
           strokeOpacity: 0.8,
           strokeWeight: 2,
           fillColor: '#FF0000',
           fillOpacity: 0.35
        });
        area.setMap(map);

    }
    else if(line === 'china'){
        latitude = 34.062751;
        longitude = -118.239281;
        map.setCenter(latlngChina);
        map.setZoom(15);
        currentRegion = 'china';
        area = new google.maps.Polygon({
           paths: areaChina,
           strokeColor: '#FF0000',
           strokeOpacity: 0.8,
           strokeWeight: 2,
           fillColor: '#FF0000',
           fillOpacity: 0.35
        });
        area.setMap(map);
    }
}

  function find(){
    //return search to json file

    var line = document.getElementById('myInput').value;

    if (currentRegion === null){
        alert("Please identify a region!");
        return;
    }

    var coor;
    var z;
    if(currentRegion === 'tokyo'){
        coor = latlngTokyo;
        z = 15.5;
    }
    else if(currentRegion === 'china'){
        coor = latlngChina;
        z = 15;
    }
    else if(currentRegion === 'mexican'){
        coor = latlngMexican;
        z = 17.2;
    }
    else if(currentRegion === 'korea'){
        coor = latlngKorea;
        z = 14;
    }


    if(listOfUserMark !== null){
        deleteMarkers();
    }
    else{
        listOfUserMark = [];
    }

   	var http =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + "," + longitude + '&radius=1000&type=' + line + '&key=AIzaSyCmhYiSK8JgigmskxIU2uC3xw8Zk-TNbIw';


    console.log(http);

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            var obj = JSON.parse(xmlHttp.responseText);
            //alert(obj.results[0].geometry.location.lat);

            var myLatlng;

            for(var i = 0; i < obj.results.length; i++){
                myLatlng = new google.maps.LatLng(obj.results[i].geometry.location.lat,obj.results[i].geometry.location.lng);

                marker = new google.maps.Marker({
                   position: myLatlng,
                   map: map,
                   name: obj.results[i].name
                });

                // google.maps.event.addListener(marker, 'click', function(){
                //     alert(marker.name);
                // })

                listOfUserMark.push(marker);

            }
        }
    }
    xmlHttp.open("GET", http, true);
    xmlHttp.send({ 'request': "authentication token" });

    // alert('end');
    return false;
  }

function deleteMarkers(){

    if(listOfUserMark !== null){
    for(var i = 0; i < listOfUserMark.length; i++){
        listOfUserMark[i].setMap(null);
        listOfUserMark[i] = null;
    }
        listOfUserMark = null;
    }

    listOfUserMark = [];

}



//this is to add parking space
function addMarker(){

    var elem = document.getElementById('map');
    var but = document.getElementById('parking');

    var cen = map.getCenter();
    if(but.innerHTML === 'Add Parking'){
            marker = new google.maps.Marker({
               position: cen,
               map: map,
            });
        but.innerHTML = 'Remove Marker';
        google.maps.event.addListener(map, 'center_changed', function() {
        // 0.1 seconds after the center of the map has changed,
        // set back the marker position.
        window.setTimeout(function() {
          var center = map.getCenter();
          marker.setPosition(center);
        });
        });
    }
    else{
        but.innerHTML = 'Add Parking';
        marker.setMap(null);
        marker = null;
    }
}


/* Backend code for Google translation API */
$(document).ready(function () {
  $("#my_popup").popup({
      background: false,
      horizontal: "center"
    });
  $('#translateButton').click(function(){
      var text = $('#txt_text').val();
      var target = $('#txt_target').val();
      $.ajax({
          url: '/translatedText',
          data: $('form').serialize(),
          type: 'POST',
          success: function(response) {
              //console.log(response);

              $('#resultTranslated').html(response);
              $('#myModal').modal('show');
          },
          error: function(error) {
              console.log(error);
          }
      });
  });
 });
