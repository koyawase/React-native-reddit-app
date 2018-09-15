import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RegisterForm from '../components/RegisterForm';

class RegisterScreen extends Component{

    static navigationOptions = {
        title: 'Register',
        color: 'grey'
    }
    
    render() {

        return (
            <View>
                <RegisterForm/>
            </View>
        );
	}
}

export default RegisterScreen;