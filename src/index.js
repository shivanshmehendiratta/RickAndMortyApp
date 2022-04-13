import React from 'react';
import ThemeProvider from './ThemeProvider';
import AppNavigator from './AppNavigator';
import {StatusBar} from 'react-native';


const DefaultTheme = {
	dark: {
		colors: {
			primary: '#000',
		},
	},
	light: {
		colors: {
			primary: '#fff',
		},
	},
};

const App = props => {
	return (
		<>
			<ThemeProvider theme={DefaultTheme}>
				<StatusBar barStyle={'light-content'} />
				<AppNavigator appVersion={props?.version} />
			</ThemeProvider>
		</>
	);
};

export default App;
