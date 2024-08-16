import styled from 'styled-components';
import CountingStars from '/img/CountingStars.jpg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
	const navigate = useNavigate();
	const [click, setClick] = useState(false);
	const [click2, setClick2] = useState(false);

	const handleCubeClick = () => {
		if (click) {
			onClick2();
		} else {
			onClick();
		}
	};

	const onClick = () => {
		setClick(true);
	};

	const onClick2 = () => {
		setClick2(true);
		setTimeout(() => {
			window.location.href = 'https://zza-lng.notion.site/31eae55098f94e95a5fb573d0c74d9c5';
		}, 2000);
	};
	console.log(click);
	console.log(click2);

	return (
		<>
			<Wrapper className={`${click2 ? 'white' : ''}`}>
				<Container>
					<Cube onClick={handleCubeClick}>
						<div className={`cube-face cube-face-front ${click ? 'clicked' : ''} ${click2 ? 'clicked2' : ''}`}></div>
						<div className={`cube-face cube-face-back ${click ? 'clicked' : ''} ${click2 ? 'clicked2' : ''}`}></div>
						<div className={`cube-face cube-face-right ${click ? 'clicked' : ''} ${click2 ? 'clicked2' : ''}`}></div>
						<div className={`cube-face cube-face-left ${click ? 'clicked' : ''} ${click2 ? 'clicked2' : ''}`}></div>
						<div className={`cube-face cube-face-top ${click ? 'clicked' : ''} ${click2 ? 'clicked2' : ''}`}></div>
						<div className={`cube-face cube-face-bottom ${click ? 'clicked' : ''} ${click2 ? 'clicked2' : ''}`}></div>
					</Cube>
				</Container>
			</Wrapper>
		</>
	);
};

export default Landing;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: center;
	align-content: center;
	font-family: 'Oleo Script', cursive;
	background-color: black;
	transition: background-color 2s ease;
	&.white {
		background-color: white;
	}
`;

const Container = styled.div`
	position: absolute;
	right: 50;
	bottom: 50;
	width: 200px;
	height: 200px;
	box-sizing: border-box;
	cursor: pointer;
`;

const Cube = styled.div`
	width: 100%;
	height: 100%;
	transform-style: preserve-3d;
	@keyframes rotateCube {
		from {
			transform: rotateX(360deg) rotateY(0deg) rotateZ(0deg);
		}
		to {
			transform: rotateX(0deg) rotateY(360deg) rotateZ(360deg);
		}
	}
	animation: rotateCube 6s infinite linear normal;

	.cube-face {
		position: absolute;
		width: 100%;
		height: 100%;
		box-shadow: 0px 0px 2px 2px white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 2rem;
		color: white;
		font-family: 'Oleo Script', cursive;
		transition: background-color 7s ease, opacity 1.5s ease, box-shadow 7s ease;
	}

	.cube-face-front {
		/* background-image: url(${CountingStars}); */
		/* background-color: white; */
		background-size: cover;
		background-position: center;
		transform: rotateY(0deg) translateZ(100px);
	}
	.cube-face-right {
		/* background-image: url(${CountingStars}); */
		/* background-color: white; */
		background-size: cover;
		background-position: center;
		transform: rotateY(90deg) translateZ(100px);
	}
	.cube-face-back {
		/* background-image: url(${CountingStars}); */
		/* background-color: white; */
		background-size: cover;
		background-position: center;
		transform: rotateY(180deg) translateZ(100px);
	}
	.cube-face-left {
		/* background-image: url(${CountingStars}); */
		/* background-color: white; */
		background-size: cover;
		background-position: center;
		transform: rotateY(-90deg) translateZ(100px);
	}
	.cube-face-top {
		/* background-image: url(${CountingStars}); */
		/* background-color: white; */
		background-size: cover;
		background-position: center;
		transform: rotateX(90deg) translateZ(100px);
	}
	.cube-face-bottom {
		/* background-image: url(${CountingStars}); */
		/* background-color: white; */
		background-size: cover;
		background-position: center;
		transform: rotateX(-90deg) translateZ(100px);
	}
	.clicked {
		background-color: #ffffff;
		box-shadow: 0px 0px 1.5px 1.5px black;
	}
	.clicked2 {
		opacity: 0;
	}
`;
