import { RouterProvider } from 'react-router-dom';
import { routesList } from './routes.tsx';
import React from 'react';

export const MeAppRouter = () => {
	return (
		<>
			<RouterProvider router={routesList} />
		</>
	);
};
