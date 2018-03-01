// Search.js

import React from 'react';
import { StyleSheet,View,TextInput,Image,Button,Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';


import Style from '../Style';
import WeatherPane  from './weather/WeatherPane';

class Search extends React.Component {

	// pour la navigation
	static navigationOptions = {
		title: 'Rechercher une ville',
		tabBarIcon: () => {
			return <Image source={require('../icons/search.png')} style={{width:20,height:20}} />
		}
	}


	constructor(props){
		super(props)
		this.state = {
			city: 'Paris'
		}
	}

	setCity(city){
		super.setState( {city: city} )
	}

	submit(){
		// s'assure d'enlever le clavier virtuel
		Keyboard.dismiss()

		//console.log( this.props.navigation )
		this.props.navigation.navigate('Result', {city: this.state.city} )
	}

	render(){
		return (
			<View style={Style.searchContainer}>
				<TextInput
					underlineColorAndroid='transparent'
					style={Style.searchInput}
					onChangeText={(text) => this.setCity(text)}
					onSubmitEditing={() => this.submit()}
					value={this.state.city}
				/>
				<Button style={Style.button} onPress={() => this.submit()} title="Rechercher" />
			</View>
		)
	}

}


const navigationOptions = {
	headerStyle: { backgroundColor: "#6688DD"},
	headerTitleStyle: { color: "#FFFFFF"}
}

export default StackNavigator({
	Search: {
		screen: Search,
		navigationOptions
	},
	Result: {
		screen: WeatherPane,
		navigationOptions
	}
})

