import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
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
        .then(() => {this.props.navigation.navigate('Home')})
        .catch((error) => {alert(error)})
        ;
    }

    render() {
        return (
            <View>
                <TextInput 
                    label='Email Address'
                    placeholder='Email'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />    
                <TextInput 
                    label='Password'
                    autoCorrect={false}
                    placeholder='Password'
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    />
                    <Button onPress={this.login} title="Log in" />

				<Button
                 onPress={() => this.props.navigation.navigate('Register')}
				 title="Register" 
				 color="grey"
				 />
            </View>
        );
	}
}

export default LoginScreen;