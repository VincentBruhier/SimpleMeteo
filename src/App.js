// App.js

import React, { Component } from 'react';
import { Platform,StatusBar,StyleSheet,Text,View } from 'react-native';
import { TabNavigator } from 'react-navigation';


// internal components
import Style    from './Style';

import Search   from './components/Search';
import About    from './components/About';


const Tabs = TabNavigator(
	// elements
	{
		Search: {screen: Search},
		About: 	{screen: About}
	},
	// configuration
	{
		tabBarPosition: 'bottom',
		tabBarOptions: {
			showIcon: true,
			showLabel: false,
			pressColor: "#8866ff",
			style: { backgroundColor: "#2266ff", borderTopWidth: 3, borderColor: "#99c" },
			indicatorStyle: { height: 2, backgroundColor: "#89c" }
		}
	}
);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// pour cacher la bar de status
//    <StatusBar hidden={true} />
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
	<View style={Style.rootContainer}>
		<StatusBar hidden={false} />
		<Tabs />
	</View>
    );
  }

}

