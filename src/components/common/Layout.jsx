import React from 'react';
import NavBar from './NavBar';
import { styled } from 'styled-components';

const Layout = ({ children }) => {
	return (
		<Container>
			<NavBar />
			{children}
		</Container>
	);
};

export default Layout;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
