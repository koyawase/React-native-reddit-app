import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
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

    logout(){
        try {
            firebase.auth().signOut();
            this.props.navigation.popToTop();
        } catch (e) {
            console.log(e);
        }
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
                <Button 
                title="Log out"
                onPress={() => this.logout()}
                />
            </View>
        );
	}
}

export default ProfileScreen;