fetch("../config.json") // 설정 파일 로드
  .then((response) => response.json())
  .then((data) => {
    const API_KEY = data.API;
  })
  .catch((error) => {
    console.error("Error loading config.json:", error);
  });
  
function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log("you live in", lat, lon);
  // console.log(position);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  // console.log(url);
  fetch(url)
  .then(response => response.json()
  .then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  }));
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

// navigator.geolocation.getCurrentPosition()