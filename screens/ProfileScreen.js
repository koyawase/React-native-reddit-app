import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ProfileScreen extends Component{

    static navigationOptions = {
        tabBarLabel: 'Profile'
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
                <Text>Profile</Text>
            </View>
        );
	}
}

export default ProfileScreen;