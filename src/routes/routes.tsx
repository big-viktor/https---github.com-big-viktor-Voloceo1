import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import ProtectedPage from '../pages/ProtectedPage';

export const routesList = createBrowserRouter([
	{
		path: '/',
		element: <Outlet />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'protected',
				element: <ProtectedPage />,
			},
		],
	},
]);
