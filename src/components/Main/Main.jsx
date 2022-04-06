import React from 'react';
import './Main.css';

import Slider from '../HomeSlider/Slider';

function Main() {
	return (
		<>
			<main className="main">
				<section className="top-shrine">
					<div className="main__top--shrines">
						<h2 className="main-heading">Top Ziyoratgohlar</h2>
						<p className="main-description">
							O’zbekistonning shonli tarixi haqida siz bilgan va
							bilmagan faktlar
						</p>
					</div>
					<Slider />
				</section>
				<section className="flok-game">
					<h2 className="game-heading">Mashxur xalq o’yinlari</h2>
					<p className="game-description">
						O’zbekistonning xalq orasida mashxur bo’lgan milliy
						o’yinlari.
					</p>
				</section>
			</main>
		</>
	);
}

export default Main;
