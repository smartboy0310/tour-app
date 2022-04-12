import React from 'react';
import './Main.css';

import Slider from '../HomeSlider/Slider';
import gameOne from '../../Assets/Images/game_one.png';
import gameTwo from '../../Assets/Images/game_two.png';
import gameThree from '../../Assets/Images/game_three.png';
import NationalFoods from './NationalFoods';
import CountryBox from './CountryBox';

function Main() {
	return (
		<>
			<main className="main">
				<section className="top-shrine">
					<div className="container">
						<div className="main__top--shrines">
							<h2 className="main-heading">Top Ziyoratgohlar</h2>
							<p className="main-description">
								O’zbekistonning shonli tarixi haqida siz bilgan
								va bilmagan faktlar
							</p>
						</div>
					</div>
					<Slider />
				</section>
				<section className="flok-game">
					<div className="container">
						<h2 className="game-heading">Mashxur xalq o’yinlari</h2>
						<p className="game-description">
							O’zbekistonning xalq orasida mashxur bo’lgan milliy
							o’yinlari.
						</p>
						<div className="game-box">
							<img
							className='game game-one'
								src={gameOne}
								alt="Kupkari game"
								width={451}
								height={546}
							/>
							<div className="game-info">
								<div className="game-img-box">
									<img
									className='game game-two'
										src={gameTwo}
										alt="Chillak game"
										width={320}
										height={260}
									/>
									<img
									className='game'
										src={gameThree}
										alt="Tug of war game"
										width={320}
										height={260}
									/>
								</div>
								<p className="game-discription">
									Mamlakatimiz mustaqillikka erishgan
									dastlabki kunlardan boshlab, milliy
									qadriyatlarimiz, an'ana-yu udumlarimiz, shu
									jumladan, xalq o‘yinlarini qayta tiklashga
									katta e'tibor qaratildi. Sportning an'anaviy
									turlari bilan birgalikda milliy sport
									turlari hamda xalq o‘yinlari ham tobora
									rivojlanib borayotir
								</p>
								<button className='game-more-btn'>batafsil</button>
							</div>
						</div>
					</div>
				</section>
				<NationalFoods />
				<CountryBox />
			</main>
		</>
	);
}

export default Main;
