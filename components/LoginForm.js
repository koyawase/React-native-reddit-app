import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import { TitledInput } from './TitledInput';
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '' };

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
                    <TitledInput 
                        label='Email Address'
                        placeholder='you@domain.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TitledInput 
                        label='Password'
                        autoCorrect={false}
                        placeholder='*******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <Button onPress={this.login} title="Log in" />
            </View>
        );
    }
}

export default LoginForm;