const clearErrorMessage = () => $('#error-container').empty();

const errorMessage = (city) => {
  $('#error-container').html(`${city} is already being tracked!`);
  setTimeout(clearErrorMessage, 3000);
};

export default errorMessage;
