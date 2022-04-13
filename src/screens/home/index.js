import {
	Text,
	Image,
	FlatList,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Background} from '../../components/View/FullScreen';
import {W} from '../../constants';
import executeRequest from '../../services';

const START_END_POINT = 'https://rickandmortyapi.com/api/character?page=1';

const HomeScreen = ({navigation}) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [startURI, setStartURI] = useState(START_END_POINT);
	useEffect(() => {
		_getData();
	}, []);

	const _getData = async () => {
		setLoading(true);
		const response = await executeRequest(startURI);
		setLoading(false);
		setData(prevData => [...prevData, ...response.results]);
		setStartURI(response.info.next);
	};
	const listProps = {
		onEndReached: loading ? null : startURI ? _getData : null,
		columnWrapperStyle: styles.container,
		ListHeaderComponent: <Text style={styles.heading}>Characters</Text>,
		showsVerticalScrollIndicator: false,
		data,
		numColumns: 2,
		keyExtractor: e => e?.id,
		renderItem: ({item}) => (
			<TouchableOpacity
				onPress={() => navigation.navigate('CHARACTER_PROFILE', item)}>
				<Image style={styles.profileImage} source={{uri: item.image}} />
			</TouchableOpacity>
		),
	};
	return (
		<>
			<Background>
				<SafeAreaView>
					<FlatList {...listProps} />
				</SafeAreaView>
			</Background>
		</>
	);
};

const styles = StyleSheet.create({
	heading: {
		fontSize: 26,
		fontWeight: '700',
		marginLeft: 0.03 * W,
	},
	profileImage: {
		height: W * 0.45,
		width: W * 0.45,
		borderRadius: 10,
		margin: W * 0.02,
	},
	container: {marginLeft: 'auto', marginRight: 'auto'},
});

export default HomeScreen;
