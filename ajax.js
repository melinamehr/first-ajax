document.addEventListener("DOMContentLoaded", function() {

var button = document.getElementById('run_request');
var pingPong = document.getElementById('ping_pong');
var sectionOne = document.querySelector('section');

  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    data: '{}',
    dataType: 'text'
  });

  button.addEventListener('click', function() {
    console.log('CLICKED AJAX BUTTON')
  });


  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/ping',
    method: 'GET',
    data: '{}',
    dataType: 'text'
  }).done(function (responseData) {
    console.log(responseData)

    sectionOne.append(responseData)

  });

  pingPong.addEventListener('click', function() {
    console.log('CLICKED PINGPONG BUTTON')
  });

});
