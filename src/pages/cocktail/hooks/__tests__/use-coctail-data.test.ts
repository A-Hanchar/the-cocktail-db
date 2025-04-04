import {appRoutes} from '@cocktailDB/core';
import {useCoctails} from '@cocktailDB/store';
import {renderHook} from '@testing-library/react';

import {useLocation, useParams} from 'react-router-dom';

import {isCocktailCode} from '../../helpers/is-cocktail-code';
import {useCoctailData} from '../use-coctail-data';

jest.mock('@cocktailDB/store', () => ({
	useCoctails: jest.fn(),
}));

jest.mock('../../helpers/is-cocktail-code', () => ({
	isCocktailCode: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useLocation: jest.fn(),
	useParams: jest.fn(),
}));

describe('useCoctailData', () => {
	const rootCocktailPath = appRoutes.cocktail.path.replace(`:${appRoutes.cocktail.identificator}`, '');

	it('SHOULD return correct cocktail data when given a valid cocktail ID', () => {
		const mockCocktailID = 'cocktailID';
		const mockCocktailData = {id: mockCocktailID, name: 'Test'};

		(useParams as jest.Mock).mockReturnValue({[appRoutes.cocktail.identificator]: mockCocktailID});
		(useLocation as jest.Mock).mockReturnValue({pathname: `${rootCocktailPath}/cocktail123`});
		(isCocktailCode as unknown as jest.Mock).mockReturnValue(true);
		(useCoctails as jest.Mock).mockReturnValue(mockCocktailData);

		const {result} = renderHook(useCoctailData);

		expect(result.current).toEqual(mockCocktailData);
		expect(useCoctails).toHaveBeenCalledWith({cocktailCode: mockCocktailID});
	});

	it('SHOULD useCoctails be called with null IF pathname do not starts with the rootCocktailPath', () => {
		const mockCocktailID = 'cocktailID';

		(useParams as jest.Mock).mockReturnValue({[appRoutes.cocktail.identificator]: mockCocktailID});
		(useLocation as jest.Mock).mockReturnValue({pathname: `tail/${rootCocktailPath}/cocktail123`});
		(isCocktailCode as unknown as jest.Mock).mockReturnValue(true);

		renderHook(useCoctailData);

		expect(useCoctails).toHaveBeenCalledWith({cocktailCode: null});
	});

	it('SHOULD useCoctails be called with null IF cockTailID is undefined', () => {
		const mockCocktailID = 'cocktailID';

		(useParams as jest.Mock).mockReturnValue({'not-valid-identificator': mockCocktailID});
		(useLocation as jest.Mock).mockReturnValue({pathname: `${rootCocktailPath}/cocktail123`});
		(isCocktailCode as unknown as jest.Mock).mockReturnValue(true);

		renderHook(useCoctailData);

		expect(useCoctails).toHaveBeenCalledWith({cocktailCode: null});
	});

	it('SHOULD useCoctails be called with null IF isCocktailCode return false', () => {
		const mockCocktailID = 'cocktailID';

		(useParams as jest.Mock).mockReturnValue({[appRoutes.cocktail.identificator]: mockCocktailID});
		(useLocation as jest.Mock).mockReturnValue({pathname: `${rootCocktailPath}/cocktail123`});
		(isCocktailCode as unknown as jest.Mock).mockReturnValue(false);

		renderHook(useCoctailData);

		expect(useCoctails).toHaveBeenCalledWith({cocktailCode: null});
	});
});
