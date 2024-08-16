import { Route, Routes } from 'react-router-dom';
import './App.css';
import PortfolioPage from './pages/PortfolioPage';
import React from 'react';
import LandingPage from './pages/LandingPage';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/portfolio" element={<PortfolioPage />} />
			</Routes>
		</>
	);
}

export default App;
