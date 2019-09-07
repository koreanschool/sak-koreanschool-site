import React from 'react';
import './App.css';
import { useRoutes } from 'hookrouter';
import { ROUTES, AUTH_ROUTES } from './data/Routes';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { EnvironmentContext } from './contexts/EnvironmentContext';
import { Footbar } from './components/Footbar/Footbar';
import useAuth from './pages/Login/useAuth';
import { ParentHome } from './pages/ParentAuth/ParentHome';

type AppProps = {
	firebase: typeof import('firebase')
}

const App: React.FC<AppProps> = ({ firebase }) => {
	const unAuthRouteResult = useRoutes(ROUTES);
	const authRouteResult = useRoutes(AUTH_ROUTES);

	const {user} = useAuth();

	if(user)
	{
		return (
			<EnvironmentContext.Provider value={{ firebase }}>
				<div>
					<NavigationBar auth={true}/>
						{authRouteResult}	
					<Footbar />
				</div>
			</EnvironmentContext.Provider>
		)
	}	
	return (
		<EnvironmentContext.Provider value={{ firebase }}>
				<div>
					<NavigationBar auth={false}/>
						{unAuthRouteResult}
					<Footbar />
				</div>
		</EnvironmentContext.Provider>
	)
}

export default App;
