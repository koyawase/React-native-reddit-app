import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';
import { Card } from 'react-native-elements';
import firebase from 'firebase';

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
        this.state = { post: this.props.navigation.state.params.data, uri: cardUri, key: ''};
        
        firebase.database().ref('/users/'+firebase.auth().currentUser.uid).on('value', (childSnapshot) => {
            childSnapshot.forEach((val) => {
                if(val.toJSON().permalink == this.state.post.permalink){
                    this.state.key = val.key;
                }
            });
        })
    }
    
    render() {

        const likeButton = <Button 
        onPress={() => this.likePost()}
        title="Like Post"
        color="grey"
        />;

        const unlikeButton = <Button 
        onPress={() => this.unlikePost()}
        title="Unlike Post"
        />;

        return (
            <View>
                <Card
                title={this.state.post.title}
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

                <Text style={styles.spacing}></Text>

                {this.state.key == ''? likeButton : unlikeButton}
                </Card>
            </View>
                
            
        );
    }
    
    likePost(){
        firebase.database().ref('/users/'+firebase.auth().currentUser.uid).push(this.state.post);
        firebase.database().ref('/users/'+firebase.auth().currentUser.uid).on('value', (childSnapshot) => {
            childSnapshot.forEach((val) => {
                if(val.toJSON().permalink == this.state.post.permalink){
                    this.setState({key: val.key});
                }
            });
        })
    }

    unlikePost(){
        if(this.state.key != ''){
            firebase.database().ref('/users/'+firebase.auth().currentUser.uid).child(this.state.key).remove();
            this.setState({key: ''});
        }
    }
}

const styles = StyleSheet.create({
    spacing: {
       margin: 5
    }
   })

export default DetailsScreen;