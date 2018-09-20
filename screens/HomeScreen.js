import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component{

    static navigationOptions = {
        tabBarLabel: 'Home',
    }
    
    render() {

        return (
            <View style={
                {
                    flex:1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }
                >
                <Text>Home</Text>
            </View>
        );
	}
}

export default HomeScreen;