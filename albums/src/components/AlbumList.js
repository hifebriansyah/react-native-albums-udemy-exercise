import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state = { records: [] }

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ records: response.data }));
	}

	renderRecords() {
		return this.state.records.map(record => <AlbumDetail key={record.title} record={record} />);
	}

	render() {
		return (<ScrollView>{this.renderRecords()}</ScrollView>);
	}
}

export default AlbumList;
