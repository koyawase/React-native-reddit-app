import React, { Component } from 'react';
import { View, Button, TextInput, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

class LoginScreen extends Component{

    state = { email: '', password: '' };
    static navigationOptions = {
        header: null
    }
    
    login = () => {
        if(this.state.email == '' || this.state.password == ''){
            alert('Please fill in the fields');
            return;
        }
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(() => {this.props.navigation.navigate('Tabs')})
        .catch((error) => {alert(error)})
        ;
    }

    render() {
        return (
            <View>
                <Text style={styles.title}> iReact</Text>
                <TextInput  
                    style={styles.textbox}
                    label='Email Address'
                    placeholder='Email'
                    underlineColorAndroid = 'grey'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />    
                <TextInput 
                    style={styles.textbox}
                    label='Password'
                    autoCorrect={false}
                    placeholder='Password'
                    underlineColorAndroid = 'grey'
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    />

                <Button
                 style={styles.button}
                 onPress={this.login} title="Log in" 
                 />
                <Text style={styles.spacing}></Text>
				<Button
                 style={styles.button}
                 onPress={() => this.props.navigation.navigate('Register')}
				 title="Register" 
				 color="grey"
				 />
            </View>
        );
	}
}

const styles = StyleSheet.create({
 title: {
     textAlign: 'center',
     fontWeight: 'bold',
     fontSize: 18,
     padding: 20
 },
 textbox: {
    
 },
 button: {
     marginTop: 20
 },
 spacing: {
    margin: 5
 }
})

export default LoginScreen;