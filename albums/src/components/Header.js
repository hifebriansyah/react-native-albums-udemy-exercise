import React from 'react';
import { View, Text } from 'react-native';

const styles = {
	view: {
		backgroundColor: '#f8f8f8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	text: {
		fontSize: 20
	}
};

const Header = (props) => (
	<View style={styles.view}>
		<Text style={styles.text}>{props.text}</Text>
	</View>
);

export default Header;
