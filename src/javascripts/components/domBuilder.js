const domBuilder = () => {
  $('#app').html(`<div class="forecast-container" id="forecast-container"></div>
                  <div class="error-container" id="error-container"></div>
                  <div class="form-container" id="form-container"></div>`);
};

export default domBuilder;
