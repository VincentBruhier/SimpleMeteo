// About.js

import React from 'react';
import { ActivityIndicator,View,Text,StyleSheet,TouchableHighlight,Linking,Image,Button } from 'react-native';
import AutoLink from 'react-native-autolink';

import { ABOUT_EMAIL } from 'react-native-dotenv'
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
	getLinkedText(){
		return `Vincent BRUHIER ${ABOUT_EMAIL}`
	}

	render(){
		return (
			<View style={Style.aboutView}>
				<Text style={Style.aboutTitle}>A propos</Text>
				<Text>Vincent BRUHIER ({ABOUT_EMAIL})</Text>

				<Text style={Style.aboutSection}>autolink</Text>
				<AutoLink text={this.getLinkedText()} email={true} />

				<Text style={Style.aboutSection}>View in row</Text>
				<View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between'}} >
					<Text>Vincent BRUHIER : </Text>
					<View>
						<TouchableHighlight onPress={() => Linking.openURL(`mailto:${ABOUT_EMAIL}`)}>
							<Text style={Style.aboutLink}>{ABOUT_EMAIL}</Text>
						</TouchableHighlight>
					</View>
				</View>

				<Text style={Style.aboutSection}>direct mail</Text>
				<TouchableHighlight onPress={() => Linking.openURL(`mailto:${ABOUT_EMAIL}`)}>
					<Text style={Style.aboutLink}>{ABOUT_EMAIL}</Text>
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

