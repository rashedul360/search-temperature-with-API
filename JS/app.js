const inputFiend = document.getElementById("inputField");
const weatherImage = document.getElementById("weather-img");
const city = document.getElementById("city-name");
const temperatures = document.getElementById("temperature");
const weatherType = document.getElementById("weather-type");
const Container = document.getElementById("temp-container");
const error = document.getElementById("error");
const temperature = () => {
  const cityName = inputFiend.value;
  inputFiend.value = "";
  const API_key = `a8988a6dac5cb696bc57bda29f908d52`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${
    cityName ? cityName : "bangladesh"
  }&appid=${API_key}&units=metric`;

  console.log(cityName);
  if (cityName === "") {
    error.innerHTML = "write your city or country";
    error.style.color = "white";
    error.style.textAlign = "center";
  } else {
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayWeather(data))
      .catch((er) => {
        error.innerHTML = `
      <div class="w-50 mx-auto">
        <div class="card text-dark bg-gray mb-3">
            <div class="card-header">N/a</div>
                <div class="card-body">
                    <h5 class="card-title">dear sir/Mam this <span style="color:tomato;">${inputFiend.value}</span> data currently not found. please try to search valid city or country name.</h5>
                </div>
            </div> 
        </div>
      </div> `;
      });
  }
};

const displayWeather = (data) => {
  error.textContent = "";
  if (data.cod === 404) {
    console.log("un");
  }

  const { main, sys, weather, wind, name } = data;
  city.innerHTML = name ? name : "N/a";
  temperatures.innerHTML = Math.round(main.temp)
    ? Math.round(main.temp)
    : "N/a";
  const url = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  weatherType.innerHTML = weather[0].main ? weather[0].main : "N/a";
  weatherImage.setAttribute("src", url);
};
