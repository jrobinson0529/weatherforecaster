const weatherSearchForm = () => {
  $('#form-container').html(`<form>
                              <div class="form-group">
                                <label for="city">Watch The Weather</label>
                                <input type="email" class="form-control" id="city" aria-describedby="emailHelp" placeholder="Zip, City, etc">
                              </div>
                              <button type="submit" class="btn btn-primary" id="weather-search-submit">Submit</button>
                              `);
};

export default weatherSearchForm;
