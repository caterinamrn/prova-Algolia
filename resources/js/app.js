require('./bootstrap');

window.$ = require('jquery');



// function search() {
//   var search  = $('#address-input').val();
//   console.log(search);
// }
//
// function addEventListener() {
//     var btn =  $('#btn');
//     btn.click(function() {
//       search();
//     });
// }
function printData(apart,target) {


    console.log('prova',apart['title']);
    var html = '<li>' + apart['title'] + ':<br> lat: ' + apart['lat'] + '</li>';
    target.append(html);

}

function getData(latlng,lat,lng) {
  // console.log(latlng);

  $.ajax({
    url:"/api/apartments/results",
    method:'GET',
    success: function(aparts){

      console.log(latlng,lat,lng);
      // search(aparts);
      var target = $('#target');
      for (var i = 0; i < aparts.length; i++) {
        var apart = aparts[i];
        // console.log('prova',apart['title']);
        // var html = '<li>' + apart['title'] + ':<br> lat: ' + apart['lat'] + '</li>';
        // target.append(html);
        printData(apart,target);
      }
    },
    error: function(err) {
      console.log('error', err);
    }
  });

}

function search(){

   // console.log(aparts);

   var places = require('places.js');
   var placesAutocomplete = places({
     appId: 'pl3L0GWSSXDR',
     apiKey: '2e3513be338d19d42a81830c543b4aa8',
     container: document.querySelector('#address-input')
   });

      // placesAutocomplete.on('change', e => console.log(e.suggestion.latlng));
      placesAutocomplete.on('change', function select(e) {
        var latlng = e.suggestion.latlng;
        var lat = latlng.lat;
        var lng = latlng.lng;
        // console.log(latlng,lat,lng);
        // console.log(latlng);
        // placesAutocomplete.configure({
        //   aroundLatLng: latlng.lat + ',' + latlng.lng, // Paris latitude longitude
        //   aroundRadius: 20 * 1000 // 20km radius
        // });
        // index.search('query', {
        //   aroundLatLng: '40.71, -74.01'
        // }).then(({ hits }) => {
        //   console.log(hits);
        // });

        getData(latlng,lat,lng);
        // getData();

      });
   // addEventListener();

}

// function addEventListener() {
//     var listener =  $('#address-input');
//     listener.on('click',getData);
// }

function init() {
  console.log('init');
  // addEventListener();
  // getData();
  // search(aparts);
  search();
}


$(document).ready(init)
