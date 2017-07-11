document.addEventListener("DOMContentLoaded", function() {

var button = document.getElementById('run_request');
var pingPong = document.getElementById('ping_pong');
var sec = document.querySelector('#step3456');

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
    url: 'http://first-ajax-api.herokuapp.com/pong',
    method: 'GET',
    data: '{}',
    dataType: 'text'
  }).done(function (responseData) {
    console.log(responseData)
    sec.append(responseData)
  }).fail(function () {
    var failMessage = "Didn't work but we'll try again!";
    pingPong.addEventListener('click', function() {
      console.log(failMessage)
    });
    sec.append(failMessage);

  });



});
