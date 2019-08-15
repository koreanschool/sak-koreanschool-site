import { createContext } from 'react';

type Environment = {
	firebase: typeof import('firebase') | null
}

export const EnvironmentContext = createContext<Environment>({
	firebase: null
})