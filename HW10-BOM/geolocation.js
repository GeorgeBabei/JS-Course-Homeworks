window.addEventListener("load", () => {
  const weatherUrl = "https://pro.openweathermap.org/data/2.5/forecast/hourly?";
  fetch(
    weatherUrl +
      "lat=44.34&lon=10.99&appid=" +
      "c05b55f85fd87896c813c8d892108c3b"
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    });
});
