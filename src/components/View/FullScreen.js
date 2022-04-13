import styled from 'styled-components';
import React from 'react';
export const TopSafeAreaElevation = styled.View`
	height: 94px;
`;

export const Background = styled.View`
	flex: 1;
	background-color: ${({bg}) => (bg ? bg : '#fff')};
	justify-content: space-between;
`;
