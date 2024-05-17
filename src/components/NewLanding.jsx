import React, { useState, useRef, useEffect } from 'react';
import './newLanding.css'; // CSS 파일 경로 확인 필요
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
			<div className="container" ref={containerRef}>
				<div className="card" style={style}>
					<div className="item">
						<img src="/img/image.png" alt="profile" />
					</div>
					<div className="info">
						<h2 className="title" style={{ transform: 'translateZ(150px)' }}>
							최재영
						</h2>
						<h3 style={{ transform: 'translateZ(125px)' }}>FE Dev.</h3>
						<div>🔨헤헤 안녕하세용🔨</div>
						<div className="purchase" style={{ transform: 'translateZ(75px)' }}>
							<button onClick={onClick}>Click!</button>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default CardComponent;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: center;
	/* background-color: black; */
	align-content: center;
	font-family: 'Oleo Script', cursive;
	&.white {
		background-color: white;
	}
`;
