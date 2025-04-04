import {appRoutes, useGoToCocktailTypePage} from '@cocktailDB/core';
import {Box, Button, Text} from '@cocktailDB/kit';

import {useEffect} from 'react';
import {Outlet, useLocation, useParams} from 'react-router-dom';

import {cocktailPagesItems} from './constants';

import styles from './index.module.css';

export default function RootPage() {
	const params = useParams();
	const goToCocktailTypePage = useGoToCocktailTypePage();

	const {pathname} = useLocation();

	useEffect(() => {
		if (pathname === appRoutes.root) {
			goToCocktailTypePage(cocktailPagesItems[0].code);
		}
	}, [goToCocktailTypePage, pathname]);

	return (
		<Box className={styles.container}>
			<nav className={styles.navigation}>
				{cocktailPagesItems.map(({code, label}) => (
					<Button.Outline onClick={() => goToCocktailTypePage(code)} key={code}>
						<Text as='span' color={params[appRoutes.cocktail.identificator] === code ? 'yellow' : 'light'}>
							{label}
						</Text>
					</Button.Outline>
				))}
			</nav>

			<main className={styles.mainBox}>
				<Outlet />
			</main>
		</Box>
	);
}
