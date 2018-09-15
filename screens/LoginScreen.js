import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import LoginForm from '../components/LoginForm';

class LoginScreen extends Component{

    static navigationOptions = {
        header: null
    }
    
    render() {
        return (
            <View>
                <LoginForm/>
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