import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase'

class ProfileScreen extends Component{

    static navigationOptions = {
        tabBarLabel: 'Profile'
    }
    
    state = {likedPosts: 0}

    componentDidMount(){
        this.getLikedPosts();
    }

    getLikedPosts = async() =>{
        firebase.database().ref('/users/'+firebase.auth().currentUser.uid).on('value', 
            post => {
                this.setState({likedPosts: post.numChildren()})
            }
        );
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
                <Text>{'Liked posts ' + this.state.likedPosts}</Text>
            </View>
        );
	}
}

export default ProfileScreen;