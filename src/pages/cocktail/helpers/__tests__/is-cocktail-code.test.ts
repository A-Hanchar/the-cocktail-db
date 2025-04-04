import {isCocktailCode} from '../is-cocktail-code';

jest.mock('@cocktailDB/api', () => ({
	ALL_COCKTAILS_CODES: ['Code1', 'Code2'],
}));

describe('isCocktailCode', () => {
	it('SHOULD return true for valid cocktail codes', () => {
		expect(isCocktailCode('Code1')).toBe(true);
		expect(isCocktailCode('Code2')).toBe(true);
	});

	it('SHOULD return false for invalid cocktail codes', () => {
		expect(isCocktailCode('Code23')).toBe(false);
		expect(isCocktailCode('')).toBe(false);
		expect(isCocktailCode(null)).toBe(false);
		expect(isCocktailCode(undefined)).toBe(false);
		expect(isCocktailCode(12345)).toBe(false);
	});
});
