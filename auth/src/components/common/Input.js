import React from 'react';
import { TextInput, View, Text } from 'react-native';

const styles = {
	TextInput: {
		color: '#404040',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2,
		height: 20,
		width: 100
	},
	text: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	view: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

const Input = (props) => (
	<View style={styles.view}>
		<Text style={styles.text}>{props.label}</Text>
		<TextInput
			style={styles.TextInput}
			autoCorrect={false}
			secureTextEntry={props.secureTextEntry}
			placeholder={props.placeholder}
			value={props.value}
			onChangeText={props.onChangeText}
		/>
	</View>
);

export { Input };
