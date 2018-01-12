import React from 'react';
import { View } from 'react-native';

const styles = {
	view: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};

const CardSection = (props) => (
	<View style={styles.view}>
		{props.children}
	</View>
);

export default CardSection;
