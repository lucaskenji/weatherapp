import React from 'react';
import SearchForm from './SearchForm.jsx';

function WeatherDisplay (props) {
	return (
		<div id='weather-display'>
			{ 
				props.data 
				
				?
				<div className='drop-div'>
					<div id='weather-location'>{ props.data.name }</div>
					<div id='weather-details'>
						<div id='weather-main'>
							<div id='weather-icon'>
								<img src={ props.data.weather.icon } alt='Weather icon'/>
							</div>
							<div id='weather-info'>
								<div id='weather-full-temp'>
									<div id='weather-tooltip'>{props.unit === 'C' ? 'fahrenheit?' : 'celsius?'}</div>
									<div onClick={props.changeUnit} id='weather-temp'>{ props.data.temp }°{ props.unit }</div>
								</div>
								<div id='weather-name'>{ props.data.weather.main }</div>
							</div>
						</div>
						<div id='weather-other'>
							Country: { props.data.country }<br/>
							Humidity: { props.data.humidity }%<br/>
							Wind: { props.data.wind } m/s
						</div>
					</div>
					<div id='weather-return'>
						<button className='submit-btn' onClick={props.cleanData}>Back</button>
					</div>
				</div>
				:
				<SearchForm errorMessage={props.errorMessage} fetchData={props.fetchData} />
			}
		</div>
	);
}

export default WeatherDisplay;