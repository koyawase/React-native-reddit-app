import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DetailsScreen extends Component{

    static navigationOptions = {
        title: 'Details',
        color: 'grey'
    }

    constructor(props){
        super(props);
        this.state = { post: this.props.navigation.state.params.data};
    }
    
    render() {

        return (
            <View>
                <Text> {"Title: " + this.state.post.title}</Text>
                <Text>{"Author: " + this.state.post.author}</Text>
            </View>
        );
	}
}

export default DetailsScreen;