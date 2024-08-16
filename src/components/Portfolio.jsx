import Layout from './common/Layout';
import styled from 'styled-components';
// import NavBar from './NavBar';

const Portfolio = () => {
	return (
		<Layout>
			<Wrapper>
				<div>진행중...</div>
			</Wrapper>
		</Layout>
	);
};

export default Portfolio;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: center;
	background-color: white;
	/* background-image: url(${CountingStars}); */
	align-content: center;
	font-family: 'Oleo Script', cursive;
	/* border: 1px solid black; */
`;

const SquareWrapper = styled.div`
	display: flex;
	margin: 3.8rem 0;
	@media (max-width: 900px) {
		margin: 2rem;
	}
`;

const Square = styled.div`
	width: 9px;
	height: 9px;
	background: #1a21bd;
	transform: rotate(45deg);
	margin: 3px;
`;
