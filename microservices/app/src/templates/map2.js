var latitude;
var longitude; 
var map; //store map
var marker; //store marker
var listOfUserMark = null;
var currentRegion = null; //store current region
var latlngKorea = {lat: 34.061578, lng:-118.302273};
var latlngTokyo = {lat: 34.052319, lng:-118.239901};
var latlngMexican = {lat: 34.056945, lng:-118.238417};
var latlngChina = {lat: 34.062751, lng:-118.239281};


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
        currentRegion = 'Korea';
    }
    else if(line === 'tokyo'){
        latitude = 34.052319;
        longitude = -118.239901;
        map.setCenter(latlngTokyo);
        map.setZoom(15.5);
        currentRegion = 'tokyo';

    }
    else if(line === 'mexican'){
        latitude = 34.056945;
        longitude = -118.238417;
        map.setCenter(latlngMexican);
        map.setZoom(17.2);
        currentRegion = 'mexican';

    }
    else if(line === 'china'){
        latitude = 34.062751;
        longitude = -118.239281;
        map.setCenter(latlngChina);
        map.setZoom(15);
        currentRegion = 'china';
    }
}

  function find(line){
    //return search to json file
      
    
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
      
    /*
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: z,
      center: coor
    });
    */
  
    if(listOfUserMark !== null){
        deleteMarkers();
    }
    else{
        listOfUserMark = [];
    }
    
   	var http =  
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + "," + longitude + '&radius=1000&';
      
    if(line === 'parking'){
      http += 'type=parking&key=AIzaSyCmhYiSK8JgigmskxIU2uC3xw8Zk-TNbIw';
    }
    else if(line === 'restaurant'){
      http += 'type=restaurant&key=AIzaSyCmhYiSK8JgigmskxIU2uC3xw8Zk-TNbIw';
    }
    else if(line === 'hotels'){
      http += 'type=hotels&key=AIzaSyCmhYiSK8JgigmskxIU2uC3xw8Zk-TNbIw';
    }
      
    
    console.log(http);
      
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            alert(xmlHttp.responseText);
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
                
                google.maps.event.addListener(marker, 'click', function(){
                    alert(marker.name);
                })
                
                listOfUserMark.push(marker);
                
            }
        }       
    }
    xmlHttp.open("GET", http, true); 
    xmlHttp.send({ 'request': "authentication token" });  
       
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