const weatherSearchFormRead = () => {
  $('#form-container').html(`<form>
                              <div class="form-group">
                                <label for="city">Watch The Weather</label>
                                <input type="email" class="form-control" id="city" aria-describedby="emailHelp" placeholder="Zip, City, etc">
                              </div>
                              <div class="btn-container" id="login-btn-container"></div>
                              `);
};

export default weatherSearchFormRead;
