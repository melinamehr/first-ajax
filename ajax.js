document.addEventListener("DOMContentLoaded", function() {

var button = document.getElementById('run_request');

  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    data: '{}',
    dataType: 'text'
  });

  button.addEventListener('click', function() {
    console.log('CLICKED AJAX BUTTON')
  });

});
