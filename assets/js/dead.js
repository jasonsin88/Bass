function picture() {
    var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=fiwH9Jsh3wjA7Tg7WOM1EcePf4acTo5r&q=scary+the+ring&limit=25&offset=0&rating=r&lang=en"
    fetch(requestUrl, {
      method: "GET",
      headers: {
        "Content-Type" : "gif"
      }
    
    })
      .then(function (response) {
        return response.gif();
      })
      .then(function (data) {
        console.log(data)
        });
  }
  picture()
