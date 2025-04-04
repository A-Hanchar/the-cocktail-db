import {appRoutes} from '../app-routes';

describe('appRoutes', () => {
	it('SHOULD match snapshot ', () => {
		expect(appRoutes).toEqual({
			root: '/',
			cocktail: {
				path: '/cocktail/:id',
				identificator: 'id',
			},
		});
	});
});
