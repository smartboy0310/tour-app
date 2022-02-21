import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Province from './components/Pages/Province';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Province />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
