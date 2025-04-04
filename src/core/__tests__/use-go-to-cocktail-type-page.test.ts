import {CocktailCode} from '@cocktailDB/api';
import {renderHook} from '@testing-library/react';

import {useNavigate} from 'react-router-dom';

import {useGoToCocktailTypePage} from '../use-go-to-cocktail-type-page';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(),
}));

describe('useGoToCocktailTypePage', () => {
	it('SHOULD navigate to the correct cocktail page based on the cocktail code', () => {
		const mockNavigate = jest.fn();
		(useNavigate as jest.Mock).mockReturnValue(mockNavigate);

		const {result} = renderHook(useGoToCocktailTypePage);

		const cocktailCode: CocktailCode = 'a1';

		result.current(cocktailCode);

		expect(mockNavigate).toHaveBeenCalledWith(`/cocktail/${cocktailCode}`);
	});
});
