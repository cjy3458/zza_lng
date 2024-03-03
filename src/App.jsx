import { Route, Routes } from 'react-router-dom';
import Landing from './pages/LandingPage';
import './App.css';
import PortfolioPage from './pages/PortfolioPage';
import React from 'react';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/portfolio" element={<PortfolioPage click={true} />} />
			</Routes>
		</>
	);
}

export default App;
