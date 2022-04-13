import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import executeRequest from '../../../../services';

const Location = ({location}) => {
	const [locationDetails, setLocationDetails] = useState(null);
	const _getLocation = async () => {
		const response = await executeRequest(location.url);
		setLocationDetails(response);
	};
	useEffect(() => {
		_getLocation();
	}, []);
	const rows = [
		{
			key: 'Name',
			value: location?.name,
		},
		{
			key: 'Total Residents',
			value: locationDetails?.residents?.length,
		},
		{
			key: 'Dimension',
			value: locationDetails?.dimension,
		},
		{
			key: 'Type',
			value: locationDetails?.type,
		},
	];
	return (
		<View style={styles.locationWrapper}>
			{rows.map(row => (
				<View key={row.key} style={styles.spacedRow}>
					<Text style={styles.locationKey}>{row.key}</Text>
					<Text style={styles.locationValue}>{row.value}</Text>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	locationWrapper: {
		backgroundColor: '#fff',
		borderRadius: 5,
		marginHorizontal: 2,
		paddingVertical: 8,
		paddingHorizontal: 16,
		shadowColor: '#000000',
		shadowOffset: {width: 0, height: 0},
		shadowOpacity: 0.2,
		shadowRadius: 1,
	},
	locationKey: {
		color: '#707070',
	},
	locationValue: {
		color: '#151515',
	},
	spacedRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export default Location;
