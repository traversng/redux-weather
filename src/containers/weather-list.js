import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
	renderWeather(cityData) {
		const cName = cityData.city.name;
		const temp = cityData.list.map(weather => weather.main.temp); 
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		return (
			<tr key={ cName }>
				<td>{ cName }</td>
				<td><Chart data={ temp } color="blue" units="K" /></td>
				<td><Chart data={ pressure } color="green" units="hPa" /></td>
				<td><Chart data={ humidity } color="orange" units="%" /></td>	
			</tr>
		)
	}

	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map(this.renderWeather) }
				</tbody>
			</table>
		); 
	}
}

function mapStateToProps(state) {
	return { weather: state.weather };
}

// function mapStateToProps({ weather }) {  <-- this is es6 syntax and equivolent to the above syntax
// I am leaving it the way it is for now to be more descriptive
// 	return { weather };
// }

export default connect(mapStateToProps)(WeatherList);