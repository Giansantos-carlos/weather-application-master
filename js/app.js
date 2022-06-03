const cityForm =  document.querySelector('[data-js="change-location"]')
const cityNameContanier =  document.querySelector('[data-js="city-name"]')
const cityWeatherContanier =  document.querySelector('[data-js="city-weather"]')
const cityTemperatureContanier = document.querySelector('[data-js="city-temperature"]')
const cityCard =  document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
const timeIconContanier  = document.querySelector('[data-js="time-icon"]')

const showCityCard = () => {
    if(cityCard.classList.contains('d-none')){
        cityCard.classList.remove('d-none')
    }
}

const showCityWeatherInfo = async cityName => {
    const [{ Key, LocalizedName }] =  await getCityData(cityName)
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] =  await getCityWeather(Key)
    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

    timeImg.src = IsDayTime ?  './src/day.svg' : timeImg.src = './src/night.svg'
    timeIconContanier.innerHTML = timeIcon
    cityNameContanier.textContent = LocalizedName
    cityWeatherContanier.textContent = WeatherText
    cityTemperatureContanier.textContent = Temperature.Metric.Value
}

cityForm.addEventListener('submit', event => {
    event.preventDefault()
    
    const inputValue = event.target.city.value 

    showCityCard()
    showCityWeatherInfo(inputValue)
    cityForm.reset()
})
