import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import LikesScreen from './LikesScreen';
import ProfileScreen from './ProfileScreen';

class TabNavigation extends Component {

}



const MainScreenNavigator = TabNavigator({
	Tab1: {screen: HomeScreen},
	Tab2: {screen: LikesScreen},
	Tab3: {screen: ProfileScreen}
},
	{
		tabBarPosition: 'bottom',
		swipeEnabled: true,
	}
)

MainScreenNavigator.navigationOptions = {
	header: null
}

export default MainScreenNavigator;