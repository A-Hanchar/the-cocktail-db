import {CocktailCode} from '@cocktailDB/api';
import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

import {appRoutes} from './app-routes';

export function useGoToCocktailTypePage() {
	const navigate = useNavigate();

	return useCallback(
		(code: CocktailCode) => {
			navigate(appRoutes.cocktail.path.replace(`:${appRoutes.cocktail.identificator}`, code));
		},
		[navigate],
	);
}
