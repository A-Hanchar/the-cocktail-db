import {ALL_COCKTAILS_CODES, CocktailCode} from '@cocktailDB/api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isCocktailCode(code: any): code is CocktailCode {
	return ALL_COCKTAILS_CODES.includes(code);
}
