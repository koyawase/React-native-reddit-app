import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LikesScreen extends Component{

    static navigationOptions = {
        tabBarLabel: 'Likes'
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
                <Text>Likes</Text>
            </View>
        );
	}
}

export default LikesScreen;