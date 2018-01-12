import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAEweuL_sfsznO-kmq3pXqQJyqT80SIO_A',
			authDomain: 'react-exercise-auth.firebaseapp.com',
			databaseURL: 'https://react-exercise-auth.firebaseio.com',
			projectId: 'react-exercise-auth',
			storageBucket: 'react-exercise-auth.appspot.com',
			messagingSenderId: '1010664690074'
		});
	}

	render() {
		return (
			<View>
				<Header text='Authentication' />
				<LoginForm />
			</View>
		);
	}
}

export default App;
