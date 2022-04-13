import {Text, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
	Background,
	TopSafeAreaElevation,
} from '../../components/View/FullScreen';
import Header from '../../components/Header';
import CharacterInfoCard from './components/info-card';
import Location from './components/location-card';
import Episode from './components/episode-card.js';
const CharacterProfileScreen = ({navigation, route}) => {
	const [character, setCharacter] = useState(route?.params);
	return (
		<>
			<Background>
				<ScrollView
					style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
					<TopSafeAreaElevation />
					<CharacterInfoCard {...{character}} />
					<Text style={styles.sectionHeading}>Origin</Text>
					<Location
						{...{
							location: character.origin,
						}}
					/>
					<Text style={styles.sectionHeading}>Location</Text>
					<Location
						{...{
							location: character.location,
						}}
					/>
					<Text style={styles.sectionHeading}>
						Episodes ({character.episode.length})
					</Text>
					<Episodes {...{episodes: character.episode}} />
				</ScrollView>
			</Background>
			<Header text="Character" onBack={() => navigation.goBack()} />
		</>
	);
};

const Episodes = ({episodes}) => {
	return (
		<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
			{episodes.map(episode => (
				<Episode key={episode.id} {...{episode}} />
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	heading1: {
		fontSize: 20,
		fontWeight: '500',
	},
	sectionHeading: {
		marginLeft: 8,
		marginBottom: 4,
		marginTop: 8,
		fontSize: 16,
		fontWeight: '500',
	},
});
export default CharacterProfileScreen;
