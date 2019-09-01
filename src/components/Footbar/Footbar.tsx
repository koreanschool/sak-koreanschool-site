import React from 'react';
import data from '../../data/data';
import './Footbar.css';

export const Footbar = () => {
	return <div className="footbar-container">
		<hr />
		<div className="footbar">
			{data.FOOTBAR.FOOTBAR_COPYRIGHT}
		</div>
	</div>
}