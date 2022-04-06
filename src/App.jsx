import React from 'react';
import './App.css';
import { Routes,  Route } from 'react-router-dom';
import Province from './Pages/Province';
import Sanctuary from './Pages/Sanctuary'
import Home from './Pages/Home';
import  Search  from './Pages/Search';
import Country from './Pages/Country';
function App() {
	return (
		
			<Routes className = 'routers'>
				
				<Route path="/shrine"  element={<Sanctuary />} />
				<Route path="/province" element={<Province />} />
				<Route path="/search" element = {<Search />}	/>
				<Route path='/country' element = {<Country />} />
				<Route path="/" element={<Home/>} />
			</Routes>
		
	);
}

export default App;
