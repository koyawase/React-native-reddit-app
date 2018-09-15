import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import { TitledInput } from './TitledInput';
import firebase from 'firebase';

class LoginForm extends Component {
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
        .then(() => {alert('Account successfully created')})
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
                    <TitledInput 
                        label='Re-enter Password'
                        autoCorrect={false}
                        placeholder='*******'
                        secureTextEntry
                        value={this.state.repassword}
                        onChangeText={repassword => this.setState({ repassword })}
                    />
                    <Button onPress={this.register} title="Register" />
            </View>
        );
    }
}

export default LoginForm;