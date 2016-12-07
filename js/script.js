$(document).ready(function () {
  $('#btnGetWeather').click(function (){
    var requestData = $('#txtCity').val() + ',' + $('txtCountry').val();
    var resultElement = $('#resultDiv');


    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?&units=imperial&APPID=d3d30f5b27665490813d939ed9013fc0',
      method: 'get',
      data: { q: requestData },
      dataType: 'json',
      success: function (data) {
        if (data.message != null) {
          resultElement.html(data.message);
        } else {
          resultElement.html('Weather: ' + data.weather[0].main + '<br/>' + 'Description: ' + data.weather[0].description + '<br/>' + 'Temperature: ' +  data.main.temp + ' °F');
          console.log(data)
        }
      },
      error: function (err){
        alert(err);
      }
    });
  });
});
