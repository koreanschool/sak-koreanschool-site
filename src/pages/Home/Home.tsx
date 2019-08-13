import React from 'react';
import { Button } from 'reactstrap';
import bannerImage from '../../assets/home/banner.jpg';
import data from '../../data/data';
import './Home.css';

const {
	BANNER_ALT_EN,
	MAIN_TEXT_EN,
	MAIN_TEXT_KR,
	NOW_ACCEPTING_REGISTRATIONS_EN,
	KR_2019_2020,
	FIRST_SEMESTER_REGISTRATION_EN,
	REGISTER_EN,
	REGISTER_KR
} = data.HOME;

export const Home = () => {
	return (
		<>
			<div className="jumbotron jumbotron-fluid bg-dark text-center">
				<div className="jumbotron-background">
					<img src={bannerImage} className="blur img-fluid" alt={BANNER_ALT_EN} />
				</div>
				<div className="container text-white">
					<h1>{MAIN_TEXT_EN}</h1>
					<h2>{MAIN_TEXT_KR}</h2>
					<div className="spacer"></div>
					<p>{KR_2019_2020} | {FIRST_SEMESTER_REGISTRATION_EN}</p>
					<p>{NOW_ACCEPTING_REGISTRATIONS_EN}</p>
					<Button color="primary" href="/register">
						{REGISTER_KR} | {REGISTER_EN}
					</Button>
				</div>
			</div>
		</>
	)
}