import React from 'react';
import { Home } from '../pages/Home/Home';
import data from './data';

export const ROUTES = {
	"/": () => <Home />
}

export const NavigationBarRoutes = [
	{
		link: "/",
		name: data.NAVBAR.HOME_EN
	},
	{
		link: "/register",
		name: data.NAVBAR.REGISTER_EN
	}
]