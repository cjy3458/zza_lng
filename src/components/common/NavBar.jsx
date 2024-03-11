import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
	const navigate = useNavigate();

	const onClick = () => {
		navigate('/');
	};

	return (
		<Wrapper>
			<LogoWrapper onClick={onClick}>
				<div>Portfolio</div>
			</LogoWrapper>
			<ButtonWrapper>
				<div>🔗Link</div>
			</ButtonWrapper>
		</Wrapper>
	);
};

export default NavBar;

const Wrapper = styled.div`
	width: 100%;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.4rem;
	top: 0;
	color: white;
	font-family: 'Oleo Script', cursive;
	/* background-color: black; */
`;

const LogoWrapper = styled.div`
	display: flex;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	padding: 1.3rem;
	color: black;
	box-shadow: 1cap white;
`;

const ButtonWrapper = styled.div`
	font-size: 1.4rem;
	display: flex;
	justify-content: center;
	cursor: pointer;
	align-items: center;
	/* padding: 1.5rem; */
`;
