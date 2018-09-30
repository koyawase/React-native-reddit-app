import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { FlatList, Button } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class LikesScreen extends Component{

    static navigationOptions = {
        tabBarLabel: 'Likes'
    }

    state = {likedPosts: []}

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async() =>{
        this.setState({likedPosts: []});
        firebase.database().ref('/users/'+firebase.auth().currentUser.uid).on('value', (childSnapshot) => {
            //EVERY TIME FIREBASE CHANGES, THIS IS CALLED. FETCHDATA NOT CALLED RATHER THE INSIDE OF THIS FUNCTION
            //RESETTING LIKEDPOSTS HERE MAKES SENSE LOGICALLY BUT DOES NOT ACTUALLY WORK
            this.setState({likedPosts: []});
            childSnapshot.forEach((val) => {
                this.setState({ likedPosts: [...this.state.likedPosts, val.toJSON()]});
            });
        })
    }
    
    render() {

        return (
            <List containerStyle={{ marginTop: 0, borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                    automaticallyAdjustContentInsets={false}
                    data={this.state.likedPosts}
                    renderItem={({item}) =>(
                        <ListItem
                            roundAvatar
                            title={item.title}
                            subtitle={item.author}
                            avatar={item.thumbnail}
                            hideChevron
                            button onPress={() => this.props.navigation.navigate('Details', {data: item})}
                        />
                    )}
                />
            </List>
        );
	}
}

export default LikesScreen;