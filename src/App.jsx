import { Route, Routes } from 'react-router-dom';
// import './App.css';
import PortfolioPage from './pages/PortfolioPage';
import React from 'react';
// import Landing from './pages/LandingPage';
import LandingPage from './pages/LandingPage';
import Landing from './components/Landing';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Landing />} />
				{/* <Route path="/" element={<LandingPage />} /> */}
				<Route path="/portfolio" element={<PortfolioPage />} />
			</Routes>
		</>
	);
}

export default App;
