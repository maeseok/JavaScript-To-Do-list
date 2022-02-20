//https 아니라서 사용 불가능
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
const API_KEY = "2ae98c2daf0aaed3d6b3c2bc05a2fe80";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherContainer = document.querySelector(
        "#weather span:first-child"
      );
      const city = document.querySelector("#weather span:last-child");
      weatherContainer.innerText = `${data.weather[0].main}/${data.main.temp}`;
      city.innerText = data.name;
    });
}
function onGeoError(err) {
  console.log(`ERROR(${err.code}): ${err.message}`);
}
