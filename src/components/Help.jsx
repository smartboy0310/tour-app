import React, { useState } from 'react';
import './Help.css';

function Help() {
	const [help, setHelp] = useState(false);
	const showHelp = () => {
		setHelp(!help);
	};
	return (
		<div className="help-box">
			<div className={help ? 'help-navbar help-active' : 'help-navbar'}>
				<div
					className={help ? 'help-bar help-active' : 'help-bar'}
					onClick={showHelp}
				></div>
				<ul className="help-list">
					<li className="help-item">
						<i class="fa fa-adjust" aria-hidden="true"></i>
					</li>
					<li className="help-item">
						<i class="fa fa-align-justify" aria-hidden="true"></i>
					</li>
					<i class="fa fa-align-center" aria-hidden="true"></i>
					<li className="help-item">
						<i class="fa fa-align-left" aria-hidden="true"></i>
					</li>
					<li className="help-item">
						<i class="fa fa-align-right" aria-hidden="true"></i>
					</li>
					<li>
						<i class="fa fa-text-height" aria-hidden="true"></i>
					</li>
					<li>
						<i class="fa fa-text-width" aria-hidden="true"></i>
					</li>
					<li>
					<i class="far fa-text-size"></i>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Help;
