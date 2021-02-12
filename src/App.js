import React from 'react';
import './style.css';
import WeatherDisplay from './components/WeatherDisplay.jsx';
import getWeatherData from './utils/getWeatherData.js';

class App extends React.Component {
	state = {
		data: null,
		unit: 'C',
		errorMessage: ''
	}
	
	fetchData = async (eventObject) => {
		eventObject.preventDefault();
		
		const locationName = eventObject.target.location_name.value;
		const data = await getWeatherData(locationName);
		
		if (!data) {
			this.setState({errorMessage: "Somehow, the data you were trying to find couldn't be reached."});
			return;
		}
		
		document.querySelector('body').classList.add(data.weather.styleName);
		document.getElementById('background-container').classList.add('fades-out');
		this.saveData(data);
	}
	
	cleanData = () => {
		document.querySelector('body').className = '';
		document.getElementById('background-container').className = '';
		this.setState({data: null, errorMessage: '', unit: 'C'});
	}
	
	saveData(data) {
		this.setState({data});
	}
	
	changeUnit = () => {
		const data = this.state.data;
		let unit = '';
		
		if (this.state.unit === 'C') {
			data.temp = (data.temp * (9/5)) + 32;
			unit = 'F';
		} else {
			data.temp = (data.temp - 32) * (5/9);
			unit = 'C';
		}
		
		data.temp = data.temp.toFixed(1);
		
		this.setState({data, unit});
	}
	
	render() {
		return (
			<div className="App">
				<div>
					<div id='app-title'><h1>Weather App</h1></div>
					<WeatherDisplay 
						fetchData={this.fetchData} 
						cleanData={this.cleanData} 
						changeUnit={this.changeUnit} 
						data={this.state.data} 
						unit={this.state.unit} 
						errorMessage={this.state.errorMessage} 
					/>
				</div>
			</div>
		);
	}
}

export default App;
