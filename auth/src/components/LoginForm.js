import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	state = { email: '', passwor: '' }

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder={'example@gmail.com'}
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
						label={'Email'}
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						placeholder={'***'}
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
						label={'Pasword'}
					/>
				</CardSection>

				<CardSection>
					<Button text='Log In' />
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
