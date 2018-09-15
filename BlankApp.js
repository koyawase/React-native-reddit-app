import React, { Component } from 'react';
import { View, Button } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


export default class App extends Component {
	
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "xxxxxxx",
            authDomain: "xxxxx.firebaseapp.com",
            databaseURL: "https://xxxx.firebaseio.com",
            projectId: "xxxx",
            storageBucket: "xxxxx.appspot.com",
            messagingSenderId: "xxxxxx"
        });
    }
    render() {
        return (
			<AppStackNavigator/>
        );
	}
}

const AppStackNavigator =  createStackNavigator({
	Login: LoginScreen,
	Register: RegisterScreen
})