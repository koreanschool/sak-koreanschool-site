import React from 'react';
import './App.css';
import { useRoutes } from 'hookrouter';
import { ROUTES } from './data/Routes';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { EnvironmentContext } from './contexts/EnvironmentContext';

type AppProps = {
	firebase: typeof import('firebase')
}

const App: React.FC<AppProps> = ({ firebase }) => {
	const routeResult = useRoutes(ROUTES);

	return (
		<EnvironmentContext.Provider value={{ firebase }}>
			<div>
				<NavigationBar />
				{routeResult}
			</div>
		</EnvironmentContext.Provider>
	);
}

export default App;
