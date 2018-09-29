import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase'

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
                <Text>{'Logged in as ' + firebase.auth().currentUser.email}</Text>
            </View>
        );
	}
}

export default ProfileScreen;