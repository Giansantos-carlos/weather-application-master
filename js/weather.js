const APIKey = 'hK8MQSo1Yq7Ao2KHH2Wl0sVqZozH5ypc'
const baseURL = 'http://dataservice.accuweather.com/'

const getCityURL = cityName => 
 `${baseURL}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherURL =  cityKey => `${baseURL}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchData =  async URL => {
    try {
        const response = await fetch(URL)

        if(!response.ok) {
            throw new Error('Não foi possivel obter os dados')
        }

        return response.json()
    } catch ({name , message}) {
        alert(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityURL(cityName))
const getCityWeather = async cityKey => fetchData(getWeatherURL(cityKey))

