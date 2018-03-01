// About.js

import React from 'react';
import { ActivityIndicator,View,Text,StyleSheet,TouchableHighlight,Linking,Image,Button } from 'react-native';
import AutoLink from 'react-native-autolink';

import Style   from '../Style';


export default class About extends React.Component {

	static	navigationOptions = {
		tabBarIcon: () => {
			return <Image source={require('../icons/user.png')}  style={{width:20,height:20}} />
		}
	}

	search(){
		// go on route 'Search'
		// composant dans une navigation : this.props.navigation (ref vers le TabNavigator)
		this.props.navigation.navigate('Search')
	}

	render(){
		return (
			<View style={Style.aboutView}>
				<Text style={Style.aboutTitle}>A propos</Text>
				<Text>Vincent BRUHIER (vincent.bruhier@dauphine.fr)</Text>

				<Text style={Style.aboutSection}>autolink</Text>
				<AutoLink text="Vincent BRUHIER (vincent.bruhier@dauphine.fr)" email={true} />

				<Text style={Style.aboutSection}>View in row</Text>
				<View style={{flex: 2, flexDirection: 'row'}}>
					<Text>Vincent BRUHIER : </Text>
					<TouchableHighlight onPress={() => Linking.openURL('mailto:vincent.bruhier@gmail.com')}>
						<Text style={Style.aboutLink}>vincent.bruhier@dauphine.fr</Text>
					</TouchableHighlight>
				</View>


				<TouchableHighlight onPress={() => Linking.openURL('mailto:vincent.bruhier@gmail.com')}>
					<Text style={Style.aboutLink}>vincent.bruhier@dauphine.fr</Text>
				</TouchableHighlight>

				<Text style={Style.aboutSection}>Indicator</Text>
				<ActivityIndicator size="small" color="#2266ff" />

				<Button
					style={Style.button}
					onPress={() => this.search()} title="Rechercher une ville"
				/>
			</View>
		)
	}

}

