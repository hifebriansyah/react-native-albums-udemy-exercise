import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = {
	header: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	thumbnailContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	thumnail: {
		height: 50,
		width: 50
	},
	image: {
		height: 300,
		flex: 1,
		width: undefined
	}
};

const AlbumDetail = (props) => (
	<Card>
		<CardSection>
			<View style={styles.thumbnailContainer}>
				<Image
					style={styles.thumnail}
					source={{ uri: props.record.thumbnail_image }}
				/>
			</View>
			<View style={styles.header}>
				<Text>{props.record.title}</Text>
				<Text>{props.record.artist}</Text>
			</View>
		</CardSection>
		<CardSection>
			<Image
				style={styles.image}
				source={{ uri: props.record.image }}
			/>
		</CardSection>
		<CardSection>
			<Button text={'buy me'} onPress={() => Linking.openURL(props.record.url)} />
		</CardSection>
	</Card>
);

export default AlbumDetail;
