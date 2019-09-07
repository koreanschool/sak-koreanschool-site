import React from 'react';
import { Home } from '../pages/Home/Home';
import LegacyRegister from '../pages/LegacyRegister/Register';
import { Confirmation } from '../pages/Confirmation/Confirmation';
import { About } from '../pages/About/About';
import { Login } from '../pages/Login/Login';
import { ParentHome } from '../pages/ParentAuth/ParentHome';
import firebase from 'firebase/app';

import data from './data';

export const ROUTES = {
	"/": () => <Home />,
	"/register": () => <LegacyRegister />,
	"/confirmation": () => <Confirmation />,
	"/about": () => <About />,
	"/signup": () => <Login />,
}

export const AUTH_ROUTES = {
	"/": () => <ParentHome />,
	"/register": () => <LegacyRegister />,
	"/confirmation": () => <Confirmation />,
	"/about": () => <About />,
	"/signout": () => {
        firebase
            .auth()
            .signOut()
            .then(() => window.location.href="/");
    }
} 

export const NavigationBarRoutes = [
	{
		link: "/",
		name: data.NAVBAR.HOME_EN
	},
	{
		link: "/register",
		name: data.NAVBAR.REGISTER_EN
	},
	{
		link: "/about",
		name: data.NAVBAR.ABOUT_EN
	},
	{
		link: "/signup",
		name: data.NAVBAR.LOGIN
	},
]

export const AuthNavigationBarRoutes = [
	{
		link: "/",
		name: data.NAVBAR.HOME_EN
	},
	{
		link: "/register",
		name: data.NAVBAR.REGISTER_EN
	},
	{
		link: "/about",
		name: data.NAVBAR.ABOUT_EN
	},
	{
		link: "/signout",
		name: data.NAVBAR.SIGN_OUT
	},
]