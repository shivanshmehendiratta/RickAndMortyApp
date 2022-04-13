import React, {memo} from 'react';
// import { AppearanceProvider } from 'react-native-appearance'
import {NavigationContainer} from '@react-navigation/native';
import * as RootNavigation from './RootNavigation';
import {useColorScheme} from 'react-native';

const ThemeProvider = memo(({children, theme}) => {
	const scheme = useColorScheme();

	return (
		<>
			{/* <AppearanceProvider> */}
			<NavigationContainer
				ref={RootNavigation.navigationRef}
				theme={
					// scheme === 'dark' ?
					theme.dark
					//  : theme.light
				}>
				{children}
			</NavigationContainer>
			{/* </AppearanceProvider> */}
		</>
	);
});

export default ThemeProvider;
