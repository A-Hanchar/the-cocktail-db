import {appRoutes} from '@cocktailDB/core';
import {useCoctails} from '@cocktailDB/store';
import {useMemo} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import {isCocktailCode} from '../helpers/is-cocktail-code';

export function useCoctailData() {
	const params = useParams();
	const {pathname} = useLocation();

	const cockTailID = useMemo(() => {
		const rootCocktailPath = appRoutes.cocktail.path.replace(`:${appRoutes.cocktail.identificator}`, '');

		if (pathname.startsWith(rootCocktailPath)) {
			const cockTailID = params[appRoutes.cocktail.identificator];

			if (cockTailID !== undefined && isCocktailCode(cockTailID)) {
				return cockTailID;
			}
		}

		return null;
	}, [params, pathname]);

	return useCoctails({cocktailCode: cockTailID});
}
