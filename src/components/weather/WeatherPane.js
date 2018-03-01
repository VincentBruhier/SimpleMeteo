// WeatherPane.js

import React from 'react';
import { View,Text,Image,ActivityIndicator,ListView } from 'react-native';
import { OPENWEATHERMAP_APIKEY } from 'react-native-dotenv'
import axios from 'axios';


import Style      from '../../Style';
import WeatherRow from './WeatherRow';


export default class WeatherPane extends React.Component {

	// init1
	//static navigationOptions = {
	//	title: 'Météo / city'
	//}

	// init2 (quels sont les parametres totales
	//static navigationOptions = (params) => {
	//	console.log(params)
	//	return {
	//		title: 'Météo / city'
	//	}
	//}

	static navigationOptions = ({navigation}) => {
		return {
			title: `Météo / ${navigation.state.params.city}`,
			tabBarIcon: () => {
				return <Image source={require('./icons/weather.png')} style={{width:20,height:20}} />
                	}
		}
	}

	constructor(props){
		super(props)
		// quels sont les parametres recuperables dans la navigation
		//console.log('state', this.props.navigation.state)
		this.state = {
			city: this.props.navigation.state.params.city,
			report: null
		}

		// veritable solution
		//this.fetchWeather()

		// montrer la barre de progression
		setTimeout(
			() => {this.fetchWeather()}
			, 200
		)
	}

	fetchWeather(){
		// temps actuel
		// `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${OPENWEATHERMAP_APIKEY}`

		// prevision
		// `http://api.openweathermap.org/data/2.5/forecast?q=London&appid=${OPENWEATHERMAP_APIKEY}`

		axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&APPID=${OPENWEATHERMAP_APIKEY}`)
			.then( (response) => {
					//console.log(response.data)
					this.setState( {report: response.data})
				}
			)
	}

	render(){
		if ( this.state.report === null ){
			// patienter pour le resultat
			return (
				<ActivityIndicator size="small" color="#2266ff" />
			)
		} else {
			// affiche le resultat apres l'appel rest

			const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
			ds.cloneWithRows(this.state.report)

			// Essais :
			//    1er essai  : renderRow={ (row) => <Text>{row.main.temp_max}</Text> }
			//    2eme essai : renderRow={ (row,j,k) => <WeatherRow day={row} index={k} /> }
			//    3eme essai : renderRow={ (row,j,k) => <WeatherRow day={row} index={parseInt(k)} /> }
			//
			return (
				<ListView
					dataSource={ds.cloneWithRows(this.state.report.list)}
					renderRow={ (row,j,k) => <WeatherRow day={row} index={parseInt(k)} /> }
				/>
			)
		}
	}
}
