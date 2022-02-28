import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Province from './Pages/Province';
import Sanctuary from './Pages/Sanctuary'
function App() {
	return (
		
			<Routes className = 'routers'>
				
				<Route path="/shrine"  element={<Sanctuary />} />	
				<Route path="/" element={<Province />} />
			</Routes>
		
	);
}

export default App;
