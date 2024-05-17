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
						<ItemImage src="/img/image.png" alt="profile" />
					</Item>
					<Info>
						<h2 className="title" style={{ transform: 'translateZ(150px)' }}>
							최재영
						</h2>
						<h3 style={{ transform: 'translateZ(125px)' }}>FE Dev.</h3>
						<div>🔨헤헤 안녕하세용🔨</div>
						<Purchase style={{ transform: 'translateZ(75px)' }}>
							<button onClick={onClick}>Click!</button>
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
	background-color: black;
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
		width: 100%;
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
		}
	}
`;
