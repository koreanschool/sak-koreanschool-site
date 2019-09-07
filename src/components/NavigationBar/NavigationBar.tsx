import React, { useState } from 'react';
import { NavigationBarRoutes, AuthNavigationBarRoutes } from '../../data/Routes';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavLink } from 'reactstrap';
import data from '../../data/data';

const {
	BRAND_EN
} = data.NAVBAR;

export const NavigationBar = (auth) => {
	const [open, setOpen] = useState<boolean>(false);
	const authenticated = auth.auth;
	const routes = authenticated ? AuthNavigationBarRoutes : NavigationBarRoutes;

	return (
		<Navbar light expand="lg">
			<NavbarBrand href="/">{BRAND_EN}</NavbarBrand>
			<NavbarToggler onClick={() => setOpen(!open)}></NavbarToggler>
			<Collapse isOpen={open} navbar>
				<Nav className="ml-auto" navbar>
					{routes.map(route => (
						<NavLink key={route.name} href={route.link}>{route.name}</NavLink>
					))}
				</Nav>
			</Collapse>
		</Navbar>
	)
}