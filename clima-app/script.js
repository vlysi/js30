let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let api_key = 'c52556d8f2bbb08407dc16c10a109378';

let Kelvin = 273.15;

document.getElementById('btnSearch').addEventListener('click', () =>{
  const city = document.getElementById('city').value;
  if(city){
    fetchWeatherData(city)
  }
})

function fetchWeatherData(city){
  fetch(`${urlBase}?q=${city}&appid=${api_key}`)
  .then(data => data.json())
  .then(data => displayWeatherData(data))
}

function displayWeatherData(data){
  const divWeatherData = document.getElementById('weatherData');
  divWeatherData.innerHTML= '';

  const cityName = data.name
  const temperature = data.main.temp
  const description = data.weather[0].description
  const icon = data.weather[0].icon

  const cityTitle = document.createElement('h2')
  cityTitle.textContent = cityName

  const temperatureInfo = document.createElement('p')
  temperatureInfo.textContent = `Temp: ${Math.floor(temperature - Kelvin)}°C | ${Math.floor((temperature - 273.15)* 9/5 + 32)}°F`

  const iconInfo = document.createElement('img')
  iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

  const descriptionInfo = document.createElement('p')
  descriptionInfo.textContent = description

  divWeatherData.appendChild(cityTitle)
  divWeatherData.appendChild(temperatureInfo)
  divWeatherData.appendChild(iconInfo)
  divWeatherData.appendChild(descriptionInfo)
}


