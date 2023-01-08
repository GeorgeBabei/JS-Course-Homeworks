const weatherGenerator = () => {
  const weatherBaseUrl = "https://api.weatherapi.com/v1";
  const weatherApiKey = "d3bf8d16a067407cad8193603221910";
  const cityInput = document.querySelector("#city-input");
  const temperatureButtonEl = document.querySelector("#temperature-button");
  const temperatureContainerEl = document.querySelector(
    "#temperature-container"
  );
  const clearCityButtonEl = document.querySelector("#clear-temperature");

  const clearCityButtonClick = () => {
    if (cityInput) {
      cityInput.value = "";
      temperatureContainerEl.style = "display: none";
    }
  };

  const onTemperatureButtonClick = () => {
    const queryParams = "key=" + weatherApiKey + "&q=" + cityInput.value;
    fetch(weatherBaseUrl + "/current.json?" + queryParams)
      .then((response) => {
        return response.json();
      })
      .then((weather) => {
        console.log(weather);
        const temperature = weather.current.temp_c;
        if ((temperature.is = Number)) {
          temperatureContainerEl.style = null;
          const cityElement = document.querySelector("#city");
          cityElement.innerHTML = cityInput.value;
          const temperatureElement =
            temperatureContainerEl.querySelector("#temperature");
          temperatureElement.innerHTML = temperature;
        }
      });
  };
  temperatureButtonEl.addEventListener("click", onTemperatureButtonClick);
  clearCityButtonEl.addEventListener("click", clearCityButtonClick);
};

const postsGenerator = () => {
  const postsBaseUrl = "https://jsonplaceholder.typicode.com";
  const postsContainerEl = document.querySelector("#posts-container");
  const titleTextareaVal = document.querySelector("#title-textarea");
  const bodyTextareaVal = document.querySelector("#body-textarea");
  const modalCloseButton = document.querySelector(".close--btn");
  const modalCancelButton = document.querySelector(".cancel--btn");
  const modalSaveButton = document.querySelector(".save--btn");
  const modalDiv = document.querySelector("#modal-cover");
  const generatedPost = document.querySelector("#generated--post");

  const renderPostsList = (posts) => {
    posts.forEach((post) => {
      const postDiv = createPost(post);

      const closeModal = () => {
        modalDiv.classList.add("hidden--class");
      };

      if (postDiv) {
        postsContainerEl.appendChild(postDiv);
        modalCloseButton.addEventListener("click", closeModal);
        modalCancelButton.addEventListener("click", closeModal);

        const openModal = () => {
          if (modalDiv.classList.contains("hidden--class")) {
            modalDiv.classList.remove("hidden--class");
            titleTextareaVal.innerHTML = post.title;
            bodyTextareaVal.innerHTML = post.body;
          }
        };

        document.querySelectorAll("#edit-button").forEach((button) => {
          button.addEventListener("click", openModal);
        });
        const deleteButton = document.querySelector("#delete-button");
        deleteButton.onclick = () => {
          fetch(postsBaseUrl + "/posts/" + post.id, {
            method: "DELETE",
            headers: {
              "Content-type": "applicaton/json",
            },
          })
            .then((res) => {
              if (res.ok) {
                generatedPost.remove();
              } else {
                console.log("Can't delete");
              }
              return res;
            })
            .then((res) => res.json())
            .then((data) => console.log(data));
        };
      }
    });
  };

  const createPost = (post) => {
    const div = document.createElement("div");
    div.innerHTML =
      "<div class='generated--post'>" +
      "<h2 class='post--title'>" +
      post.title +
      "</h2>" +
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
  };

  fetch(postsBaseUrl + "/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      renderPostsList(posts);
    });
};

const pageInit = () => {
  weatherGenerator();
  postsGenerator();
};
window.addEventListener("load", () => {
  pageInit();
});
