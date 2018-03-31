var latitude;
var longitude; 
var map;

function initMap() {
    latitude = 34.047336;
    longitude = -118.339229;
    var coord = {lat: latitude, lng: longitude};
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: coord
    });
  }

 /* 
    this is to change the map using inputs 
 */
  function change(){
    alert("hello");
    var input =document.getElementById('input');
    var uluru = {lat: -25.363, lng: 131.044};
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: Number(input.value),
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map

    });     
  }

  function findParking(){
    //return search to json file
    var bound = map.getBounds();
    var cen  = bound.getCenter();
    //alert(cen);
      
    var latlng = map.getCenter();
      
   	var http =  
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latlng.lat() + "," + latlng.lng() + '&radius=10000&type=parking&keyword=cruise&key=AIzaSyCmhYiSK8JgigmskxIU2uC3xw8Zk-TNbIw';
      
    alert('inside');
      
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            //alert("inside ready state");
            var obj = JSON.parse(xmlHttp.responseText);
            alert(obj.results[0].geometry.location.lat);
            
            var myLatlng, marker;
            
            for(var i = 0; i < obj.results.length; i++){
                myLatlng = new google.maps.LatLng(obj.results[i].geometry.location.lat, obj.results[i].geometry.location.lng);
                marker = new google.maps.Marker({
                   position: myLatlng,
                   map: map
                });
            }
        }       
    }
    xmlHttp.open("GET", http, true); 
    xmlHttp.send({ 'request': "authentication token" });  
      
        
    
  }