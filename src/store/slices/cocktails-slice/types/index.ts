import {CocktailAlcoholic, CocktailCategory, CocktailCode} from '@cocktailDB/api';

import {ASYNC_STATUS} from '../../types';

export type CocktailIngredientMeasure = {
	ingredient: string;
	measure: string | null;
};

export type CocktailModel = {
	id: string;
	strDrink: string;
	strAlcoholic: CocktailAlcoholic;
	strCategory: CocktailCategory;
	strGlass: string;
	ingredientsWithMeasure: CocktailIngredientMeasure[];
	strDrinkThumb: string;
	strInstructions: string | null;
};

export type CocktailsStateModel = {
	status: ASYNC_STATUS;
	data: CocktailModel[];
};

export type CocktailsState = Record<CocktailCode, CocktailsStateModel>;
