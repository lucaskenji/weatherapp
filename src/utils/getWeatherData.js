const getWeatherData = async (locationName) => {
	const API_KEY = 'insert api key here';
	const stringApi = 'http://api.openweathermap.org/data/2.5/weather?q=' + locationName + '&appid=' + API_KEY + '&units=metric';
	
	try {
		const response = await fetch(stringApi, { mode: 'cors' });
		const jsonData = await response.json();

		return {
			name: jsonData.name,
			wind: jsonData.wind.speed,
			country: jsonData.sys.country,
			temp: jsonData.main.temp,
			humidity: jsonData.main.humidity,
			weather: {
				main: jsonData.weather[0].main,
				icon: 'http://openweathermap.org/img/wn/' + jsonData.weather[0].icon + '@2x.png',
				styleName: 'weather-class-' + jsonData.weather[0].main
			}
		}
	} catch (err) {
		console.log(err);
		return null;
	}
}

export default getWeatherData;