import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from '../pages/Home.tsx';

import AboutUs from '../pages/AboutUs.jsx';
import Contact from '../pages/Contact.jsx';
import FormCopmanie from '../pages/ForCompanie.jsx';

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
				path: 'AboutUs',
				element: <AboutUs />,
			},
			{
				path: 'Contact',
				element: <Contact />,
			},
			{
				path: 'FormCopmanie',
				element: <FormCopmanie />,
			},
		],
	},
]);
