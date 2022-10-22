function weatherGenerator() {
  var weatherBaseUrl = "https://api.weatherapi.com/v1";
  var weatherApiKey = "d3bf8d16a067407cad8193603221910";
  var cityInput = document.querySelector("#city-input");
  var temperatureButtonEl = document.querySelector("#temperature-button");
  var temperatureContainerEl = document.querySelector("#temperature-container");
  var clearCityButtonEl = document.querySelector("#clear-temperature");
  temperatureButtonEl.addEventListener("click", onTemperatureButtonClick);
  clearCityButtonEl.addEventListener("click", clearCityButtonClick);

  function clearCityButtonClick() {
    if (cityInput) {
      cityInput.value = "";
      temperatureContainerEl.style = "display: none";
    }
  }

  function onTemperatureButtonClick() {
    var queryParams = "key=" + weatherApiKey + "&q=" + cityInput.value;

    fetch(weatherBaseUrl + "/current.json?" + queryParams)
      .then(function (response) {
        return response.json();
      })
      .then(function (weather) {
        console.log(weather);
        var temperature = weather.current.temp_c;
        if ((temperature.is = Number)) {
          temperatureContainerEl.style = null;
          var cityElement = document.querySelector("#city");
          cityElement.innerHTML = cityInput.value;
          var temperatureElement =
            temperatureContainerEl.querySelector("#temperature");
          temperatureElement.innerHTML = temperature;
        }
      });
  }
}

function postsGenerator() {
  var postsBaseUrl = "https://jsonplaceholder.typicode.com";
  var postsContainerEl = document.querySelector("#posts-container");
  var titleTextareaVal = document.querySelector("#title-textarea");
  var bodyTextareaVal = document.querySelector("#body-textarea");
  var modalCloseButton = document.querySelector(".close--btn");
  var modalCancelButton = document.querySelector(".cancel--btn");
  var modalSaveButton = document.querySelector(".save--btn");
  var modalDiv = document.querySelector("#modal-cover");
  modalCloseButton.addEventListener("click", closeModal);
  modalCancelButton.addEventListener("click", closeModal);

  function renderPostsList(posts) {
    posts.forEach(function (post) {
      var postDiv = createPost(post);

      if (postDiv) {
        postsContainerEl.appendChild(postDiv);
        document.querySelectorAll("#edit-button").forEach(function (btn) {
          btn.addEventListener("click", openModal);
        });
      }
    });
  }

  function createPost(post) {
    var div = document.createElement("div");
    div.innerHTML =
      "<div class='generated--post'>" +
      "<div class='post--title'>" +
      "<h2>" +
      post.title +
      "</h2>" +
      "</div>" +
      "<p class='post--body'>" +
      post.body +
      "</p>" +
      "<button id='edit-button' data-id='" +
      post.id +
      "'>E</button>" +
      "<button id='delete-button' data-id='" +
      post.id +
      "'>X</button>" +
      "</div>";
    return div;
  }

  fetch(postsBaseUrl + "/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      renderPostsList(posts);
    });

  function openModal(post) {
    if (modalDiv.classList.contains("hidden--class")) {
      modalDiv.classList.remove("hidden--class");
      titleTextareaVal.value = post.title;
      bodyTextareaVal.value = post.body;
    }
  }

  function closeModal() {
    modalDiv.classList.add("hidden--class");
    titleTextareaVal.value = "";
    bodyTextareaVal.value = "";
  }
}

var pageInit = function () {
  weatherGenerator();
  postsGenerator();
};
window.addEventListener("load", function () {
  pageInit();
});

// modalSaveButton.addEventListener("click", function () {
//   if (!modalDiv.classList.contains("hidden--class")) {
//     fetch(postsBaseUrl + "/posts/" + post.id, {
//       method: "PUT",
//       body: JSON.stringify({
//         id: post.id,
//         title: titleTextareaVal.value,
//         body: bodyTextareaVal.value,
//         userId: post.userId,
//       }),
//     }).then(function (response) {
//       return response.json();
//     });
//     closeModal();
//   }
// });
