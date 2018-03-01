// WeatherRow.js

import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/fr';


import Style from '../../Style'
import AnimateSlideView from '../animations/AnimateSlideView'

moment.locale('fr')

export default class WeatherRow extends React.Component {

	// valeur par defaut
 	static defaultProps = {
		day: {main: {temp: 0,temp_max: 0}},
		index: -1
	}

	// verification des casts
	//    <WeatherRow day=<<object>> index=<<number>> />
	//
	// avec React (react version < 16)
	//static propTypes = {
	//	day: React.PropTypes.object,
	//	index: React.PropTypes.number
	//}
	// avec prop-types (react version >= 16 )
	static propTypes = {
		day: PropTypes.object,
		index: PropTypes.number
	}

	internDayAndHourOfWeek(){
		let day  = moment(this.props.day.dt * 1000).format('ddd')
		let hour = moment(this.props.day.dt * 1000).format('HH:mm')
		return ( <Text style={[style.bold,style.white]}>{day.toUpperCase()} {hour}</Text> )
	}
	internDateOfYear(){
		let day = moment(this.props.day.dt * 1000).format('DD/MM')
		return ( <Text style={[style.dayOfYear]}>{ day }</Text> )
	}
	displayDate(){
		//return <Text>{this.internDayAndHourOfWeek()} - {this.internDateOfYear()}</Text>
		return ( <Text>{this.internDayAndHourOfWeek()}</Text> )
	}

	tempToCelcius(temp){
		return Math.round( temp - 273.15 );
	}
	icon(size = 22){
		const type=this.props.day.weather[0].main.toLowerCase()
		let image=null
		switch(type){
			case 'clear':
				image=require('./icons/clear.png')
				break;
			case 'clouds':
				image=require('./icons/clouds.png')
				break;
			case 'rain':
				image=require('./icons/rain.png')
				break;
			case 'sun':
				image=require('./icons/sun.png')
				break;
			case 'snow':
				image=require('./icons/snow.png')
				break;
		}
		if ( image === null ){
			return ( <Text>{type}</Text> )
		} else {
			return ( <Image source={image} style={{width:size,height:size,marginRight:8}} /> )
		}
	}

	render(){
		return (
			<AnimateSlideView delay={this.props.index * 50}>
				<View style={style.view}>
					<View style={{flex: 1,flexDirection: 'row', alignItems: 'center'}}>{this.icon(25)}{this.displayDate()}</View>
					<Text style={style.temp}>{this.tempToCelcius(this.props.day.main.temp)}°C</Text>
				</View>
			</AnimateSlideView>
		)
	}

}


const style = StyleSheet.create({
	view: {
		backgroundColor: "#999",
		borderWidth: 0,
		borderBottomWidth: 1,
		borderBottomColor: "#666",
		paddingHorizontal: 20,
		paddingVertical: 6,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	temp: {
		color: "#fff",
		fontWeight: 'bold',
		fontSize: 18
	},
	dayOfYear: {
		fontSize: 10
	},
	bold:  { fontWeight: 'bold' },
	white: { color: '#fff' }
})
