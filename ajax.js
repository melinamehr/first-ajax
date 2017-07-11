document.addEventListener("DOMContentLoaded", function() {

  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    data: '{}',
    dataType: 'text'
  });

  var button = document.getElementById('run_request');
  button.addEventListener('click', function() {
    console.log('CLICKED AJAX BUTTON')
  });

  var buttonPing = document.getElementById('ping_pong');
  buttonPing.addEventListener('click', function() {
  var sec = document.querySelector('#step3456');

  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/ping',
    method: 'GET',
    data: '{}',
    dataType: 'text'
  }).done(function (responseData) {
    console.log(responseData);
    sec.append(responseData);
  }).fail(function () {
    var failMessage = "Didn't work but we'll try again!";
      console.log(failMessage);
      sec.append(failMessage);
    });
  }).always(function() {
    var alwaysMessage = "Hey the request finished!"
    console.log(alwaysMessage);
    sec.append(alwaysMessage);
    });

    var buttonCount = document.getElementById('button_count');
      buttonCount.addEventListener('click', function() {
        var secCount = document.getElementById('step7')

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data: '{}',
      dataType: 'text',
    }).done(function (responseData) {
      console.log(responseData);
      secCount.append(responseData);
    });

    var buttonTime = document.getElementById('ajax_time');
    var sectionTime = document.querySelector('#step8')
      buttonTime.addEventListener('click', function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {
        timezone: 'Pacific/Honolulu'
      },
      dataType: 'text',
    }).done(function(responseData) {
      console.log(responseData);
      sectionTime.append(responseData);

    })
  })
})
});
