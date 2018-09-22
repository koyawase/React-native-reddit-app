import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class HomeScreen extends Component{

    state = {category: '', posts: []};
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
            this.setState( {posts: responseJson.data.children});
        })
        .catch((error) => {
            console.log('error ' + error);
        });
     }

    render() {

        return (
            <List containerStyle={{borderTopWidth:0, borderBottomWidth: 0}}>
                <FlatList
                    data={this.state.posts}
                    renderItem={({item}) =>(
                        <ListItem
                            roundAvatar
                            title={item.data.title}
                            subtitle={item.data.author}
                            avatar={item.data.thumbnail}
                            hideChevron
                            button onPress={() => this.props.navigation.navigate('Details', {data: item.data})}
                        />
                    )}
                />

            </List>
        );
    }

}

export default HomeScreen;