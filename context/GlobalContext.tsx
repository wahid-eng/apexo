'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

interface GlobalState {
	isNavbarOpen: boolean;
}

interface GlobalContextType {
	state: GlobalState;
	toggleNavbar: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [state, setState] = useState<GlobalState>({
		isNavbarOpen: false,
	});

	const toggleNavbar = () =>
		setState((prevState) => ({
			...prevState,
			isNavbarOpen: !prevState.isNavbarOpen,
		}));

	return (
		<GlobalContext.Provider value={{ state, toggleNavbar }}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = (): GlobalContextType => {
	const context = useContext(GlobalContext);

	if (context === undefined) {
		throw new Error(
			'useGlobalContext must be used within a GlobalContextProvider'
		);
	}

	return context;
};
