import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import React from 'react';
import {BackArrow} from '../../assets/svg';
import {BlurView} from '@react-native-community/blur';


const Header = ({text, onBack}) => {
	return (
		<HeaderContainer>
			<BlurView blurType="light" blurAmount={100}>
				<HeaderView>
					<BackButton onPress={onBack}>
						<View style={{flexDirection: 'row', alignItems: 'center'}}>
							<BackArrow />
							<BackText>Back</BackText>
						</View>
					</BackButton>
					<TitleContainer>
						<HeaderText>{text}</HeaderText>
					</TitleContainer>
					<View style={{width: '25%'}} />
				</HeaderView>
			</BlurView>
		</HeaderContainer>
	);
}

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const HeaderView = styled.View`
	color: #ffffff;
	flex-direction: row;
	padding-top: 44px;
	align-items: center;
	justify-content: space-between;
`;
const HeaderContainer = styled.View`
	height: 94px;
	position: absolute;
	top: 0px;
	left: 0px;
`;

const HeaderText = styled.Text`
	font-size: 17px;
	font-weight: 700;
	color: #151515;
	text-align: center;
`;
const TitleContainer = styled.View`
	width: 50%;
	justify-content: center;
	align-content: center;
	flex-direction: row;
`;

const BackButton = styled.TouchableOpacity`
	padding-vertical: 5%;
	width: 25%;
	justify-content: center;
	padding-left: 5%;
`;

const BackText = styled.Text`
	color: #007AFF;
	margin-left: 4px;
	font-size: 12px;
	font-weight: 400;
`;


export default Header