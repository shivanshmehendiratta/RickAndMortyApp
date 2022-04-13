import {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import executeRequest from '../../../../services';
import React from 'react';

const Episode = ({episode}) => {
	const [episodeDetails, setEpisodeDetails] = useState(null);
	const _getEpisode = async () => {
		const response = await executeRequest(episode);
		setEpisodeDetails(response);
	};
	useEffect(() => {
		_getEpisode();
	}, []);
	const rows = [
		{
			key: 'Name',
			value: episodeDetails?.name,
		},
		{
			key: 'Air Date',
			value: episodeDetails?.air_date,
		},
		{
			key: 'Episode',
			value: episodeDetails?.episode,
		},
		{
			key: '# of Characters',
			value: episodeDetails?.characters?.length,
		},
	];
	return (
		<View style={styles.episodeWrapper}>
			{rows.map(row => (
				<>
					<Text style={styles.episodeKey}>{row.key}</Text>
					<Text>{row.value}</Text>
				</>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	episodeWrapper: {
		backgroundColor: '#ffffff',
		padding: 8,
		minWidth: 200,
		borderRadius: 5,
		marginRight: 8,
		shadowColor: '#000000',
		shadowOffset: {width: 0, height: 0},
		shadowOpacity: 0.2,
		shadowRadius: 1,
		margin: 4,
	},

	episodeKey: {
		fontSize: 10,
		color: '#707070',
	},
});

export default Episode;
