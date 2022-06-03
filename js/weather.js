const APIKey = 'hK8MQSo1Yq7Ao2KHH2Wl0sVqZozH5ypc'

const getCityUrl = cityName => `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`
const getCityWeatherUrl = cityKey => `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Não foi possível obter os dados')
        }
        return response.json()
    } catch ({name, message}) {
        alert(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))
const getCityWeather = cityKey => fetchData(getCityWeatherUrl(cityKey))

