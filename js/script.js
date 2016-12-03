$(document).ready(function () {
  $('btnGetWeather').click(function (){
    var requestData = $('#txtCity').val() + ',' + $('txtCountry').val();
    var resultElement = $('#resultDiv');


    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather',
      method: 'get',
      data: { q: requestData },
      dataType: 'json',
      success: function (data) {
        if (data.message != null) {
          resultElement.html(data.message);
        } else {
          resultElement.html('Weather: ' + data.weather[0].main + '<br/>' + 'Description: ' + data.weather[0].description);
        }
    });
  });
});
