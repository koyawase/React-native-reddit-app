import React, { Component } from 'react';
import { View, Text, Button, Linking } from 'react-native';
import { Card } from 'react-native-elements';
import Test from '../'

class DetailsScreen extends Component{

    static navigationOptions = {
        title: 'Details',
        color: 'grey'
    }

    constructor(props){
        super(props);
        cardUri = '';
        if(this.props.navigation.state.params.data.preview != undefined){
            cardUri = this.props.navigation.state.params.data.preview.images[0].source.url;
        }
        else{
            cardUri = 'http://i.imgur.com/sdO8tAw.png';
        }
        this.state = { post: this.props.navigation.state.params.data, uri: cardUri};
        
    }
    
    render() {

        return (
            <View>
                <Card
                title={this.state.post.title}
                //image={{uri: this.state.post.preview.images[0].source.url}} defaultSource={require("../images/reddit-logo.png")} 
                image={{uri: this.state.uri}}
                >
                <Text style={{marginBottom: 10}}>
                    {'Author: ' + this.state.post.author}
                </Text>
                <Text style={{marginBottom: 10}}>
                    {'Likes: ' + this.state.post.score}
                </Text>
                <Text style={{marginBottom: 10}}>
                    {'Comments: ' + this.state.post.num_comments}
                </Text>
                
                <Button
                 onPress={() => Linking.openURL('http://reddit.com/'+this.state.post.permalink)}
				 title="View on Reddit" 
				 />

                </Card>
            </View>
                
            
        );
	}
}

export default DetailsScreen;