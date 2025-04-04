import {appRoutes} from '@cocktailDB/core';
import {lazy} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

const Root = lazy(() => import('./pages/root'));
const Cocktail = lazy(() => import('./pages/cocktail'));
const NotFound = lazy(() => import('./pages/not-found'));

export function Routing() {
	const routes = createRoutesFromElements(
		<Route path={appRoutes.root} element={<Root />}>
			<Route path={appRoutes.cocktail.path} element={<Cocktail />} />,
			<Route path='*' element={<NotFound />} />,
		</Route>,
	);

	const router = createBrowserRouter(routes);
	return <RouterProvider router={router} />;
}
