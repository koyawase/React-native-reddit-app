import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';

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

     getRedditPosts = async() =>{
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
            <List>
                <FlatList
                    data={this.state.likedPosts}
                    renderItem={({item}) =>(
                        <ListItem
                            roundAvatar
                            title={item.data.title}
                            subtitle={item.data.author}
                            avatar={item.data.thumbnail}
                            hideChevron
                        />
                    )}
                />

            </List>
        );
	}
}

export default HomeScreen;