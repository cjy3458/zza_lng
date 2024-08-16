import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

function CardComponent() {
	const containerRef = useRef(null);
	const [style, setStyle] = useState({});

	const [click, setClick] = useState(false);

	const onClick = () => {
		if (!click) {
			setClick(true);
			setTimeout(() => {
				window.location.href = 'https://zza-lng.notion.site/31eae55098f94e95a5fb573d0c74d9c5';
			}, 1400);
		} else return;
	};
	useEffect(() => {
		const card = containerRef.current;

		const handleMouseMove = (e) => {
			const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
			const yAxis = (window.innerHeight / 2 - e.pageY) / 20;

			setStyle({
				transform: `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`,
			});
		};

		const handleMouseEnter = () => {
			setStyle((style) => ({ ...style, transition: 'none' }));
		};

		const handleMouseLeave = () => {
			setStyle({
				transition: 'all .3s ease',
				transform: `rotateY(0deg) rotateX(0deg)`,
			});
		};

		if (card) {
			card.addEventListener('mousemove', handleMouseMove);
			card.addEventListener('mouseenter', handleMouseEnter);
			card.addEventListener('mouseleave', handleMouseLeave);
		}

		return () => {
			if (card) {
				card.removeEventListener('mousemove', handleMouseMove);
				card.removeEventListener('mouseenter', handleMouseEnter);
				card.removeEventListener('mouseleave', handleMouseLeave);
			}
		};
	}, []);

	return (
		<Wrapper className={`${click ? 'white' : ''}`}>
			<Container ref={containerRef}>
				<Card className={`${click ? 'white' : ''}`} style={style}>
					<Item>
						<ItemImage src="https://velog.velcdn.com/images%2Foneook%2Fpost%2Fc2fa087b-f651-4ea8-9ec7-718ffd7f1fd4%2Fload-screen-ui-element.gif" />
						{/* <ItemImage src="/img/image.png" alt="profile" /> */}
					</Item>
					<Info>
						<h2 className="title" style={{ transform: 'translateZ(150px)' }}>
							최재영
						</h2>
						<h3 style={{ transform: 'translateZ(125px)' }}>FE Dev.</h3>
						<div>🔨헤헤 안녕하세용🔨</div>
						<Purchase style={{ transform: 'translateZ(75px)' }}>
							<button onClick={onClick} className="custom-btn btn-12">
								<span>Click!</span>
								<span>Read More</span>
							</button>
						</Purchase>
					</Info>
				</Card>
			</Container>
		</Wrapper>
	);
}

export default CardComponent;

const Wrapper = styled.div`
	display: flex;
	width: 10000px;
	height: 100vh;
	align-items: center;
	justify-content: center;
	/* background-color: black; */
	align-content: center;
	font-family: 'Oleo Script', cursive;
	transition: background-color 2s ease;
	&.white {
		background-color: white;
	}
`;

const Container = styled.div`
	width: 350px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Card = styled.div`
	width: 30rem;
	border-radius: 30px;
	padding: 0rem 5rem;
	background-color: white;
	color: black;
	box-shadow: 0 30px 30px rgba(255, 255, 255, 0.5), 0 0 100px rgba(255, 255, 255, 0.5);
	transform-style: preserve-3d;
	transition: all 0.1s ease, all 0.3s ease;
	&.white {
		visibility: hidden;
		opacity: 0;
		transition: visibility 0s 1s, opacity 1s linear !important;
	}
`;

const Item = styled.div`
	min-height: 35vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ItemImage = styled.img`
	min-height: 35vh;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1.5rem;
	width: 12rem;
	z-index: 2;
	transition: all 0.75s ease-out;
	border-radius: 10rem;
`;

const Info = styled.div`
	h2 {
		font-size: 2rem;
	}
	h3 {
		font-size: 1.3rem;
		color: #585858;
		font-weight: lighter;
		transition: all 0.75s ease-out;
	}
`;

const Purchase = styled.div`
	margin: 3rem 0;
	button {
		width: 200px;
		height: 40px;
		padding: 10px 25px;
		border: 2px solid #000;
		font-family: 'Lato', sans-serif;
		font-weight: 500;
		background: transparent;
		cursor: pointer;
		transition: all 0.98s ease-out;
		-webkit-transition: all 0.98s ease-out;
		position: relative;
		display: inline-block;
		position: relative;
		right: 20px;
		bottom: 20px;
		border: none;
		width: 130px;
		height: 40px;
		line-height: 40px;
		-webkit-perspective: 230px;
		perspective: 230px;
		span {
			display: block;
			position: absolute;
			width: 190px;
			height: 40px;
			border: 2px solid #000;
			margin: 0;
			text-align: center;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			-webkit-transition: all 1.3s;
			transition: all 1.3s;
		}
		span:nth-child(1) {
			box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
			-webkit-transform: rotateX(90deg);
			-moz-transform: rotateX(90deg);
			transform: rotateX(90deg);
			-webkit-transform-origin: 50% 50% -20px;
			-moz-transform-origin: 50% 50% -20px;
			transform-origin: 50% 50% -20px;
		}
		span:nth-child(2) {
			-webkit-transform: rotateX(0deg);
			-moz-transform: rotateX(0deg);
			transform: rotateX(0deg);
			-webkit-transform-origin: 50% 50% -20px;
			-moz-transform-origin: 50% 50% -20px;
			transform-origin: 50% 50% -20px;
		}
		&:hover span:nth-child(1) {
			-webkit-transform: rotateX(0deg);
			-moz-transform: rotateX(0deg);
			transform: rotateX(0deg);
		}
		&:hover span:nth-child(2) {
			background: #e0e5ec;
			color: #e0e5ec;
			-webkit-transform: rotateX(-90deg);
			-moz-transform: rotateX(-90deg);
			transform: rotateX(-90deg);
		}
		/* width: 100%;
		padding: 1rem 0rem;
		background: #000;
		border: none;
		color: #fff;
		cursor: pointer;
		border-radius: 30px;
		font-weight: bolder;
		&:hover {
			background: grey;
			border: 2px solid black;
			color: black;
			transition: all 0.75s ease-out;
		} */
	}
`;

const Options = styled.div`
	display: flex;
	justify-content: space-between;
	transition: all 0.75s ease-out;
	-webkit-transition: all 0.75s ease-out;
	button {
		padding: 0.5rem 1.5rem;
		background: none;
		border: none;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
		border-radius: 30px;
		cursor: pointer;
		font-weight: bold;
		color: #585858;
		&.active {
			background: #585858;
			color: #fff;
		}
	}
`;
