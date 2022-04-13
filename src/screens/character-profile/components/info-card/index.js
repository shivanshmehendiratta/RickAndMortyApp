import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function CharacterInfoCard({character}) {
	return (
		<>
			<Image style={styles.profileImage} source={{uri: character.image}} />
			<View style={{alignItems: 'center', marginTop: 8}}>
				<Text style={styles.heading1}>{character.name}</Text>
				<View style={styles.centeredRow}>
					<StatusBadge {...{status: character.status}} />
					<Text>
						{character.status} - {character.species} ({character.gender})
						{character.type != '' && ` (${character.type})`}
					</Text>
				</View>
			</View>
		</>
	);
}

const StatusBadge = ({status}) => {
	return (
		<View
			style={{
				...styles.badge,
				backgroundColor: status === 'Alive' ? 'green' : 'red',
			}}
		/>
	);
};

const styles = StyleSheet.create({
	heading1: {
		fontSize: 20,
		fontWeight: '500',
	},

	profileImage: {
		height: 200,
		width: 200,
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: 10,
		marginTop: 8,
	},

	centeredRow: {flexDirection: 'row', alignItems: 'center'},

	badge: {borderRadius: 20, height: 10, width: 10, marginRight: 8},
});
