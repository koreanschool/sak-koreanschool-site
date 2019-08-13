import React from 'react';
import './App.css';
import { useRoutes } from 'hookrouter';
import { ROUTES } from './data/Routes';
import { NavigationBar } from './components/NavigationBar/NavigationBar';

const App: React.FC = () => {
	const routeResult = useRoutes(ROUTES);

	return (
		<div>
			<NavigationBar />
			{routeResult}
		</div>
	);
}

export default App;
