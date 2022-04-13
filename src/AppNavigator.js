import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/home';
import CharacterProfileScreen from './screens/character-profile';
const Stack = createStackNavigator();

const AppNavigator = props => {
	return (
		<Stack.Navigator
			screenOptions={{
				animationEnabled: false,
				headerShown: false,
			}}>
			<Stack.Screen name="HOME" component={HomeScreen} />
			<Stack.Screen
				name="CHARACTER_PROFILE"
				component={CharacterProfileScreen}
			/>
		</Stack.Navigator>
	);
};

export default AppNavigator;
