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

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
      });
}

/*An array containing all the country names in the world:*/
var countries = ["accounting", "airport", "amusement_park","aquarium","art_gallery","atm","bakery","bank","bar","beauty_salon"
,"bicycle_store","book_store","bowling_alley","bus_station","cafe","campground","car_dealer","car_rental","car_repair","car_wash","casino","cemetery","church","clothing_store","convenience_store","department_store","gas_station","gym","hardware_store","hindu_temple","home_goods_store","hospital","library","liquor_store","local_government_office","locksmith","lodging","meal_delivery","meal_takeaway","mosque","movie_theater","museum","night_club","park","parking","pharmacy","restaurant","school","shopping_mall","stadium","supermarket","synagogue","zoo"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);
