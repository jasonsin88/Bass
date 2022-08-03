function api2() {
    var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=fiwH9Jsh3wjA7Tg7WOM1EcePf4acTo5r&q=scary+the+ring&limit=25&offset=0&rating=r&lang=en"
    fetch(requestUrl, {})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.data[0].images.original.url)
            var randomNumber = Math.floor(Math.random() * 25) + 1;
            console.log(data.data)
          var body = document.getElementsByTagName("body")
          body[0].style.backgroundImage="url("+ data.data[randomNumber].images.original.url+")"
          console.log(body)
        });


}
api2()

// let fig = document.createElement("figure");
// let img = document.createElement('img');
// let fc = document.createElement("figcaption");
// img.src = content.data[0].images.downsized.url;
// img.alt = content.data[0].title;
// fc.textContent = content.data[0].title;
// fig.appendChild(img);
// fig.appendChild(fc);
// let picture = document.querySelector("picture");
// picture.insertAdjacentElement("afterbegin", fig);

// function init(){
//     let url = "https://api.giphy.com/v1/gifs/search?api_key=fiwH9Jsh3wjA7Tg7WOM1EcePf4acTo5r&q=scary+the+ring&limit=25&offset=0&rating=r&lang=en";
//     url = url.concat(str);
//     console.log(url);
//     fetch(url)
//     .then(response => response.json)
//     ,then(content => {
//         console.log(content.data);
//         console.log("META", content.meta);
//     })
// }

// let fig = document.createElement("figure");
// let img = document.createElement('img');
// let fc = document.createElement("figcaption");
// img.src = content.data[0].images.downsized.url;
// img.alt = content.data[0].title;
// fc.textContent = content.data[0].title;
// fig.appendChild(img);
// fig.appendChild(fc);
// let picture = document.querySelector("picture");
// picture.insertAdjacentElement("afterbegin", fig);

// function init(){
//     let url = "https://api.giphy.com/v1/gifs/search?api_key=fiwH9Jsh3wjA7Tg7WOM1EcePf4acTo5r&q=scary+the+ring&limit=25&offset=0&rating=r&lang=en";
//     url = url.concat(str);
//     console.log(url);
//     fetch(url)
//     .then(response => response.json)
//     ,then(content => {
//         console.log(content.data);
//         console.log("META", content.meta);
//     })
// }