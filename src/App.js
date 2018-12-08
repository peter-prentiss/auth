import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    state = { loggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA-YIwxRkwwxk4wJdbTp8GlPOTojJOB0KY",
            authDomain: "auth-3cf90.firebaseapp.com",
            databaseURL: "https://auth-3cf90.firebaseio.com",
            projectId: "auth-3cf90",
            storageBucket: "auth-3cf90.appspot.com",
            messagingSenderId: "374520540411"
        });

        firebase.auth().onAuthStateChange((user) => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

