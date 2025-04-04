import {ASYNC_STATUS, CocktailModelStore} from '@cocktailDB/store';
import {render, screen} from '@testing-library/react';

import CocktailPage from '../';
import {useCoctailData} from '../hooks/use-coctail-data';

jest.mock('../components/additional-box', () => ({
	AdditionalBox: jest.fn(() => <div data-test-id='AdditionalBox' />),
}));

jest.mock('../hooks/use-coctail-data', () => ({
	useCoctailData: jest.fn(),
}));

describe('<CoctailPage />', () => {
	it('SHOULD render the AdditionalBox IF useCoctailData return null', () => {
		(useCoctailData as jest.Mock).mockReturnValue(null);

		render(<CocktailPage />);

		expect(screen.queryByTestId('AdditionalBox')).toBeInTheDocument();
	});

	it('SHOULD render the AdditionalBox IF useCoctailData return status PENDING', () => {
		(useCoctailData as jest.Mock).mockReturnValue({
			status: ASYNC_STATUS.PENDING,
		});

		render(<CocktailPage />);

		expect(screen.queryByTestId('AdditionalBox')).toBeInTheDocument();
	});

	it('SHOULD render the main section IF useCoctailData return status SUCCEEDED', () => {
		(useCoctailData as jest.Mock).mockReturnValue({
			status: ASYNC_STATUS.SUCCEEDED,
			data: [],
		});

		render(<CocktailPage />);

		expect(screen.queryByTestId('AdditionalBox')).not.toBeInTheDocument();
		expect(screen.queryByTestId('section')).toBeInTheDocument();
	});

	it('SHOULD render the main section IF useCoctailData return status SUCCEEDED and data is passed', () => {
		const cocktailsMock = new Array(3).fill(null).map<CocktailModelStore>((_, index) => ({
			id: `id-${index}`,
			ingredientsWithMeasure: [
				{
					ingredient: 'ingredient 1',
					measure: 'measure',
				},
				{
					ingredient: 'ingredient 2',
					measure: null,
				},
			],
			strAlcoholic: 'Alcoholic',
			strCategory: 'Cocktail',
			strDrink: '',
			strDrinkThumb: '',
			strGlass: '',
			strInstructions: null,
		}));

		(useCoctailData as jest.Mock).mockReturnValue({
			status: ASYNC_STATUS.SUCCEEDED,
			data: cocktailsMock,
		});

		render(<CocktailPage />);

		expect(screen.queryAllByTestId('cocktailCardBox')).toHaveLength(cocktailsMock.length);
		expect(screen.queryAllByTestId('divider')).toHaveLength(cocktailsMock.length - 1);
	});
});
