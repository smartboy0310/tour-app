import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgPlus from '../../Assets/Images/plus.svg';
import imgClose from '../../Assets/Images/close.svg';
import imgBank from '../../Assets/Images/bank.svg';
import imgHotel from '../../Assets/Images/hotel.svg';
import imgRestaurant from '../../Assets/Images/restaurant.svg';
import imgHospital from '../../Assets/Images/hospital.svg';
import imgLocation from '../../Assets/Images/location.svg';

function AddInfoCard() {
	const [imgShowBank, setImgShowBank] = useState(true);
	const [imgShowHotel, setImgShowHotel] = useState(true);
	const [imgShowRestaurant, setImgShowRestaurant] = useState(true);
	const [imgShowHospital, setImgShowHospital] = useState(true);

	const showImgBank = () => {
		setImgShowBank(!imgShowBank);
		setImgShowHotel(true);
		setImgShowRestaurant(true);
		setImgShowHospital(true);
	};

	const showImgHotel = () => {
		setImgShowHotel(!imgShowHotel);
		setImgShowRestaurant(true);
		setImgShowHospital(true);
		setImgShowBank(true);
	};

	const showImgRestaurant = () => {
		setImgShowRestaurant(!imgShowRestaurant);
		setImgShowHospital(true);
		setImgShowBank(true);
		setImgShowHotel(true);
	};

	const showImgHospital = () => {
		setImgShowHospital(!imgShowHospital);
		setImgShowBank(true);
		setImgShowHotel(true);
		setImgShowRestaurant(true);
	};
	return (
		<div className="additional-info">
			<ul className="additional-info__list">
				<li className="add-info__item">
					<div className="add-info__header">
						<img
							src={imgHotel}
							alt="near bank"
							className="near-obj"
							width={40}
							height={40}
						/>
						<h3 className="near-obj-heading">The nearest hotels</h3>
						<img
							src={imgShowHotel ? imgPlus : imgClose}
							alt="add info show"
							className="add-info__show"
							onClick={showImgHotel}
							width={30}
							height={30}
						/>
					</div>
					<ul className={imgShowHotel ? 'add-info__card' : 'add-info__card close-card'}>
						<li className="add-info__card-item">
							<div className="add-info__box">
								<img
									src={imgHotel}
									alt="info box"
									className="info-box__img"
									width={40}
									height={40}
								/>
								<div className="info-box__dic">
									<h4 className="info-box-heading">
										Hotel name
									</h4>
									<p className="info-box__paragraph">
										Lorem ipsum dolor sit amet.
									</p>
									<div className="obj-content">
										<Link to="#" className="obj-tel">
											+9989999999
										</Link>
										<Link to="#" className="obj-address">
											<img
												src={imgLocation}
												alt="obj location"
												className="obj-location"
												width={30}
												height={30}
											/>
										</Link>
									</div>
								</div>
							</div>
						</li>
                  <li className="add-info__card-item">
							<div className="add-info__box">
								<img
									src={imgHotel}
									alt="info box"
									className="info-box__img"
									width={40}
									height={40}
								/>
								<div className="info-box__dic">
									<h4 className="info-box-heading">
										Hotel name
									</h4>
									<p className="info-box__paragraph">
										Lorem ipsum dolor sit amet.
									</p>
									<div className="obj-content">
									<Link to="#" className="obj-tel">
											+9989999999
										</Link>
										<Link to="#" className="obj-address">
											<img
												src={imgLocation}
												alt="obj location"
												className="obj-location"
												width={30}
												height={30}
											/>
										</Link>
									</div>
								</div>
							</div>
						</li>
                  <li className="add-info__card-item">
							<div className="add-info__box">
								<img
									src={imgHotel}
									alt="info box"
									className="info-box__img"
									width={40}
									height={40}
								/>
								<div className="info-box__dic">
									<h4 className="info-box-heading">
										Hotel name
									</h4>
									<p className="info-box__paragraph">
										Lorem ipsum dolor sit amet.
									</p>
									<div className="obj-content">
									<Link to="#" className="obj-tel">
											+9989999999
										</Link>
										<Link to="#" className="obj-address">
											<img
												src={imgLocation}
												alt="obj location"
												className="obj-location"
												width={30}
												height={30}
											/>
										</Link>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</li>
				<li className="add-info__item">
					<div className="add-info__header">
						<img
							src={imgBank}
							alt="near bank"
							className="near-obj"
							width={40}
							height={40}
						/>
						<h3 className="near-obj-heading">The nearest banks</h3>
						<img
							src={imgShowBank ? imgPlus : imgClose}
							alt="add info show"
							className="add-info__show"
							onClick={showImgBank}
							width={30}
							height={30}
						/>
					</div>
               <ul className={imgShowBank ? 'add-info__card' : 'add-info__card close-card'}>
						<li className="add-info__card-item">
							<div className="add-info__box">
								<img
									src={imgHotel}
									alt="info box"
									className="info-box__img"
									width={40}
									height={40}
								/>
								<div className="info-box__dic">
									<h4 className="info-box-heading">
										Hotel name
									</h4>
									<p className="info-box__paragraph">
										Lorem ipsum dolor sit amet.
									</p>
									<div className="obj-content">
									<Link to="#" className="obj-tel">
											+9989999999
										</Link>
										<Link to="#" className="obj-address">
											<img
												src={imgLocation}
												alt="obj location"
												className="obj-location"
												width={30}
												height={30}
											/>
										</Link>
									</div>
								</div>
							</div>
						</li>
                  <li className="add-info__card-item">
							<div className="add-info__box">
								<img
									src={imgHotel}
									alt="info box"
									className="info-box__img"
									width={40}
									height={40}
								/>
								<div className="info-box__dic">
									<h4 className="info-box-heading">
										Hotel name
									</h4>
									<p className="info-box__paragraph">
										Lorem ipsum dolor sit amet.
									</p>
									<div className="obj-content">
									<Link to="#" className="obj-tel">
											+9989999999
										</Link>
										<Link to="#" className="obj-address">
											<img
												src={imgLocation}
												alt="obj location"
												className="obj-location"
												width={30}
												height={30}
											/>
										</Link>
									</div>
								</div>
							</div>
						</li>
                  <li className="add-info__card-item">
							<div className="add-info__box">
								<img
									src={imgHotel}
									alt="info box"
									className="info-box__img"
									width={40}
									height={40}
								/>
								<div className="info-box__dic">
									<h4 className="info-box-heading">
										Hotel name
									</h4>
									<p className="info-box__paragraph">
										Lorem ipsum dolor sit amet.
									</p>
									<div className="obj-content">
									<Link to="#" className="obj-tel">
											+9989999999
										</Link>
										<Link to="#" className="obj-address">
											<img
												src={imgLocation}
												alt="obj location"
												className="obj-location"
												width={30}
												height={30}
											/>
										</Link>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</li>
				<li className="add-info__item">
					<div className="add-info__header">
						<img
							src={imgRestaurant}
							alt="near bank"
							className="near-obj"
							width={35}
							height={35}
						/>
						<h3 className="near-obj-heading">
							The nearest restaurant
						</h3>

						<img
							src={imgShowRestaurant ? imgPlus : imgClose}
							alt="add info show"
							className="add-info__show"
							onClick={showImgRestaurant}
							width={30}
							height={30}
						/>
					</div>
               <ul className={imgShowRestaurant ? 'add-info__card' : 'add-info__card close-card'}>
						<li className="add-info__card-item">
							<div className="add-info__box">
								<img
									src={imgHotel}
									alt="info box"
									className="info-box__img"
									width={40}
									height={40}
								/>
								<div className="info-box__dic">
									<h4 className="info-box-heading">
										Hotel name
									</h4>
									<p className="info-box__paragraph">
										Lorem ipsum dolor sit amet.
									</p>
									<div className="obj-content">
									<Link to="#" className="obj-tel">
											+9989999999
										</Link>
										<Link to="#" className="obj-address">
											<img
												src={imgLocation}
												alt="obj location"
												className="obj-location"
												width={30}
												height={30}
											/>
										</Link>
									</div>
								</div>
							</div>
						</li>
                  <li className="add-info__card-item">
							<div className="add-info__box">
								<img
									src={imgHotel}
									alt="info box"
									className="info-box__img"
									width={40}
									height={40}
								/>
								<div className="info-box__dic">
									<h4 className="info-box-heading">
										Hotel name
									</h4>
									<p className="info-box__paragraph">
										Lorem ipsum dolor sit amet.
									</p>
									<div className="obj-content">
									<Link to="#" className="obj-tel">
											+9989999999
										</Link>
										<Link to="#" className="obj-address">
											<img
												src={imgLocation}
												alt="obj location"
												className="obj-location"
												width={30}
												height={30}
											/>
										</Link>
									</div>
								</div>
							</div>
						</li>
                  <li className="add-info__card-item">
							<div className="add-info__box">
								<img
									src={imgHotel}
									alt="info box"
									className="info-box__img"
									width={40}
									height={40}
								/>
								<div className="info-box__dic">
									<h4 className="info-box-heading">
										Hotel name
									</h4>
									<p className="info-box__paragraph">
										Lorem ipsum dolor sit amet.
									</p>
									<div className="obj-content">
									<Link to="#" className="obj-tel">
											+9989999999
										</Link>
										<Link to="#" className="obj-address">
											<img
												src={imgLocation}
												alt="obj location"
												className="obj-location"
												width={30}
												height={30}
											/>
										</Link>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</li>
				<li className="add-info__item">
					<div className="add-info__header">
						<img
							src={imgHospital}
							alt="near bank"
							className="near-obj"
							width={40}
							height={40}
						/>
						<h3 className="near-obj-heading">
							The nearest hospitals
						</h3>
						<img
							src={imgShowHospital ? imgPlus : imgClose}
							alt="add info show"
							className="add-info__show"
							onClick={showImgHospital}
							width={30}
							height={30}
						/>
					</div>
               <ul className={imgShowHospital ? 'add-info__card' : 'add-info__card close-card'}>
						<li className="add-info__card-item">
							<div className="add-info__box">
								<img
									src={imgHotel}
									alt="info box"
									className="info-box__img"
									width={40}
									height={40}
								/>
								<div className="info-box__dic">
									<h4 className="info-box-heading">
										Hotel name
									</h4>
									<p className="info-box__paragraph">
										Lorem ipsum dolor sit amet.
									</p>
									<div className="obj-content">
									<Link to="#" className="obj-tel">
											+9989999999
										</Link>
										<Link to="#" className="obj-address">
											<img
												src={imgLocation}
												alt="obj location"
												className="obj-location"
												width={30}
												height={30}
											/>
										</Link>
									</div>
								</div>
							</div>
						</li>
                  <li className="add-info__card-item">
							<div className="add-info__box">
								<img
									src={imgHotel}
									alt="info box"
									className="info-box__img"
									width={40}
									height={40}
								/>
								<div className="info-box__dic">
									<h4 className="info-box-heading">
										Hotel name
									</h4>
									<p className="info-box__paragraph">
										Lorem ipsum dolor sit amet.
									</p>
									<div className="obj-content">
									<Link to="#" className="obj-tel">
											+9989999999
										</Link>
										<Link to="#" className="obj-address">
											<img
												src={imgLocation}
												alt="obj location"
												className="obj-location"
												width={30}
												height={30}
											/>
										</Link>
									</div>
								</div>
							</div>
						</li>
                  <li className="add-info__card-item">
							<div className="add-info__box">
								<img
									src={imgHotel}
									alt="info box"
									className="info-box__img"
									width={40}
									height={40}
								/>
								<div className="info-box__dic">
									<h4 className="info-box-heading">
										Hotel name
									</h4>
									<p className="info-box__paragraph">
										Lorem ipsum dolor sit amet.
									</p>
									<div className="obj-content">
									<Link to="#" className="obj-tel">
											+9989999999
										</Link>
										<Link to="#" className="obj-address">
											<img
												src={imgLocation}
												alt="obj location"
												className="obj-location"
												width={30}
												height={30}
											/>
										</Link>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}

export default AddInfoCard;
