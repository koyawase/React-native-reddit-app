import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from 'firebase';

class RegisterScreen extends Component{

    static navigationOptions = {
        title: 'Register',
        color: 'grey'
    }
    
    state = { email: '', password: '', repassword: '' };

    register = () => {
        if(this.state.email == '' || this.state.password == ''){
            alert('Please fill in the fields');
            return;
        }
        if(this.state.password != this.state.repassword){
            alert('Passwords do not match');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => { this.props.navigation.pop()})
        .catch((error) => {alert(error)})
        ;
    }

    render() {
        return (
            <View>
                    <TextInput 
                        label='Email Address'
                        placeholder='Email'
                        underlineColorAndroid = 'grey'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput 
                        label='Password'
                        autoCorrect={false}
                        placeholder='Password'
                        underlineColorAndroid = 'grey'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <TextInput 
                        label='Re-enter Password'
                        autoCorrect={false}
                        placeholder='Re-enter Password'
                        underlineColorAndroid = 'grey'
                        secureTextEntry
                        value={this.state.repassword}
                        onChangeText={repassword => this.setState({ repassword })}
                    />
                    <Button onPress={this.register} title="Register" />
            </View>
        );
    }
}

export default RegisterScreen;