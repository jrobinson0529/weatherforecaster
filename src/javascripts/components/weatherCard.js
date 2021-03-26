const weatherCard = (array) => {
  $('#forecast-container').empty();
  array.forEach((element) => {
    $('#forecast-container').append(`<div class="card city-weather-card" style="width: 18rem;" id="${element.cityId}">
    <button type="button" class="btn btn-outline-dark delete-btn" id="delete-card--${element.firebaseKey}">&#10005</button>
   <div class="card-img-top" style="background-image: url('${element.image}');">
  </div>
      <div="card-body">
  <h2 class="title">${element.cityName}</h2>
   <p class="card-text">Currently <strong>${element.currentTemp}</strong>&#8457 | ${element.weatherDescription}</p>
 </div>
</div>`);
  });
};

export default weatherCard;
