import {ALL_COCKTAILS_CODES} from '../constants';

type CocktailCodeTuple = typeof ALL_COCKTAILS_CODES;
export type CocktailCode = CocktailCodeTuple[number];

export type CocktailAlcoholic = 'Alcoholic';
export type CocktailCategory = 'Cocktail' | 'Ordinary Drink';
export type CocktailCreativeCommonsConfirmed = 'Yes' | 'No';

export interface CocktailModel {
	dateModified: string | null;
	idDrink: string;
	strAlcoholic: CocktailAlcoholic;
	strCategory: CocktailCategory;
	strCreativeCommonsConfirmed: CocktailCreativeCommonsConfirmed;
	strDrink: string;
	strDrinkAlternate: string | null;
	strDrinkThumb: string;
	strGlass: string;
	strIBA: string | null;
	strImageAttribution: null;
	strImageSource: null;
	strIngredient1: string | null;
	strIngredient2: string | null;
	strIngredient3: string | null;
	strIngredient4: string | null;
	strIngredient5: string | null;
	strIngredient6: string | null;
	strIngredient7: string | null;
	strIngredient8: string | null;
	strIngredient9: string | null;
	strIngredient10: string | null;
	strIngredient11: string | null;
	strIngredient12: string | null;
	strIngredient13: string | null;
	strIngredient14: string | null;
	strIngredient15: string | null;
	strInstructions: string | null;
	strInstructionsDE: string | null;
	strInstructionsES: string | null;
	strInstructionsFR: string | null;
	strInstructionsIT: string | null;
	'strInstructionsZH-HANS': string | null;
	'strInstructionsZH-HANT': string | null;
	strMeasure1: string | null;
	strMeasure2: string | null;
	strMeasure3: string | null;
	strMeasure4: string | null;
	strMeasure5: string | null;
	strMeasure6: string | null;
	strMeasure7: string | null;
	strMeasure8: string | null;
	strMeasure9: string | null;
	strMeasure10: string | null;
	strMeasure11: string | null;
	strMeasure12: string | null;
	strMeasure13: string | null;
	strMeasure14: string | null;
	strMeasure15: string | null;
	strTags: string | null;
	strVideo: string | null;
}

export type Response = {
	drinks: CocktailModel[];
};
