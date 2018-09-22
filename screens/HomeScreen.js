import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component{

    state = {category: '', likedPosts: []};
    static navigationOptions = {
        tabBarLabel: 'Home',
    }
    
    componentDidMount(){
        console.log('Home page loaded');
        this.state.category = 'popular';
        this.getRedditPosts();
    }

     getRedditPosts(){
        return fetch('https://www.reddit.com/r/'+this.state.category+'/top.json?limit=50')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson.data.children);
            this.setState( {likedPosts: responseJson.data.children});
            console.log(this.state.likedPosts);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
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