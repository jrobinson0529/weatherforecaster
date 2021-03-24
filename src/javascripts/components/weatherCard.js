const weatherCard = (object) => {
  $('#forecast-container').append(`<div class="card city-weather-card" style="width: 18rem;" id=${object.id}>
                                    <div class="card-img-top" style="background-image: url('http://openweathermap.org/img/wn/${object.weather[0].icon}@2x.png');">
                                    </div>
                                    <div="card-body">
                                    <h2 class="title" id="title-input-${object.id}" class="title"></h2>
                                      <p class="card-text">Currently: <strong>${object.main.temp}</strong>&#8457 with ${object.weather[0].description}</p>
                                    </div>
                                  </div>`);
};

export default weatherCard;