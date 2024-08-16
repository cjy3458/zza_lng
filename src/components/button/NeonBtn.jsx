import React, { useState } from 'react';
import styled from 'styled-components';

const NeonBtn = () => {
	const [click, setClick] = useState(false);

	const onClick2 = () => {
		if (!click) {
			setClick(true);
			// setTimeout(() => {
			// 	navigate('/portfolio');
			// }, 1400);
			setTimeout(() => {
				window.location.href = 'https://zza-lng.notion.site/31eae55098f94e95a5fb573d0c74d9c5';
			}, 1400);
		} else return;
	};
	return (
		<Wrapper>
			<div onClick={onClick2} className={`${click ? 'white' : ''}`}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				Portfolio
			</div>
		</Wrapper>
	);
};

export default NeonBtn;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: center;
	font-family: 'Oleo Script', cursive;
	div {
		position: relative;
		display: inline-block;
		padding: 25px 30px;
		margin: 40px 0;
		background-color: black;
		color: white;
		text-decoration: none;
		text-transform: uppercase;
		transition: 0.5s;
		letter-spacing: 4px;
		overflow: hidden;
		cursor: pointer;
		&.white {
			background-color: white;
			color: black;
			transition: background-color 3s ease;
		}
	}
	div span {
		position: absolute;
		display: block;
		z-index: 25;
	}

	div span:nth-child(1) {
		top: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background: linear-gradient(90deg, transparent, #9f9f9f);
		animation: animate1 2s linear infinite;
	}

	@keyframes animate1 {
		0% {
			transform: translateX(-100%);
		}
		50%,
		100% {
			transform: translateX(100%);
		}
	}

	div span:nth-child(2) {
		top: 0;
		right: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(180deg, transparent, #9f9f9f);
		animation: animate2 2s linear infinite;
		animation-delay: 0.5s;
	}

	@keyframes animate2 {
		0% {
			transform: translateY(-100%);
		}
		50%,
		100% {
			transform: translateY(100%);
		}
	}

	div span:nth-child(3) {
		bottom: 0;
		right: 0;
		width: 100%;
		height: 2px;
		background: linear-gradient(270deg, transparent, #9f9f9f);
		animation: animate3 2s linear infinite;
		animation-delay: 1s;
	}

	@keyframes animate3 {
		0% {
			transform: translateX(100%);
		}
		50%,
		100% {
			transform: translateX(-100%);
		}
	}

	div span:nth-child(4) {
		bottom: 0;
		left: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(360deg, transparent, #9f9f9f);
		animation: animate4 2s linear infinite;
		animation-delay: 1.5s;
	}

	@keyframes animate4 {
		0% {
			transform: translateY(100%);
		}
		50%,
		100% {
			transform: translateY(-100%);
		}
	}
`;
