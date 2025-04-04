import {CocktailCode} from '@cocktailDB/api';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {fetchCoctailByCode} from '.';
import {RootState, useAppDispatch} from '../../export';

type Parameters = {
	cocktailCode: CocktailCode | null;
};

export function useCoctails({cocktailCode}: Parameters) {
	const dispatch = useAppDispatch();

	const {cocktails} = useSelector((state: RootState) => state.cocktails);

	useEffect(() => {
		if (cocktailCode === null) {
			return;
		}

		const promise = dispatch(fetchCoctailByCode(cocktailCode));

		return () => {
			promise.abort();
		};
	}, [cocktailCode, dispatch]);

	return cocktailCode === null ? null : cocktails[cocktailCode];
}
