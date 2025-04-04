import {api, CocktailCode} from '@cocktailDB/api';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {ASYNC_STATUS} from '../types';
import {CocktailIngredientMeasure, CocktailModel, CocktailsState, CocktailsStateModel} from './types';
import {RootState} from '../../export';

export const fetchCoctailByCode = createAsyncThunk(
	'searchByName',
	async function (code: CocktailCode, {signal}) {
		const response = await api.cocktails.searchByName(signal, code);

		const out: CocktailModel[] = response.data.drinks.map((cocktail) => {
			return {
				id: cocktail.idDrink,
				strAlcoholic: cocktail.strAlcoholic,
				strDrink: cocktail.strDrink,
				strCategory: cocktail.strCategory,
				strDrinkThumb: cocktail.strDrinkThumb,
				strGlass: cocktail.strGlass,
				strInstructions: cocktail.strInstructions,
				ingredientsWithMeasure: [
					{ingredient: cocktail.strIngredient1, measure: cocktail.strMeasure1},
					{ingredient: cocktail.strIngredient2, measure: cocktail.strMeasure2},
					{ingredient: cocktail.strIngredient3, measure: cocktail.strMeasure3},
					{ingredient: cocktail.strIngredient4, measure: cocktail.strMeasure4},
					{ingredient: cocktail.strIngredient5, measure: cocktail.strMeasure5},
					{ingredient: cocktail.strIngredient6, measure: cocktail.strMeasure6},
					{ingredient: cocktail.strIngredient7, measure: cocktail.strMeasure7},
					{ingredient: cocktail.strIngredient8, measure: cocktail.strMeasure8},
					{ingredient: cocktail.strIngredient9, measure: cocktail.strMeasure9},
					{ingredient: cocktail.strIngredient10, measure: cocktail.strMeasure10},
					{ingredient: cocktail.strIngredient11, measure: cocktail.strMeasure11},
					{ingredient: cocktail.strIngredient12, measure: cocktail.strMeasure12},
					{ingredient: cocktail.strIngredient13, measure: cocktail.strMeasure13},
					{ingredient: cocktail.strIngredient14, measure: cocktail.strMeasure14},
					{ingredient: cocktail.strIngredient15, measure: cocktail.strMeasure15},
				].filter((cocktail): cocktail is CocktailIngredientMeasure => !!cocktail.ingredient),
			};
		});

		return out;
	},
	{
		condition: function (code, {getState}) {
			const {cocktails} = getState() as RootState;

			const currentStatus = cocktails.cocktails[code].status;

			return currentStatus !== ASYNC_STATUS.SUCCEEDED;
		},
	},
);

function getInitialCocktailState() {
	const state: CocktailsStateModel = {
		data: [],
		status: ASYNC_STATUS.IDLE,
	};

	return state;
}

type State = {
	cocktails: CocktailsState;
};

const initialState: State = {
	cocktails: {
		a1: getInitialCocktailState(),
		kir: getInitialCocktailState(),
		margarita: getInitialCocktailState(),
		mojito: getInitialCocktailState(),
	},
};

const cocktailsSlice = createSlice({
	name: 'cocktails',
	initialState,
	reducers: {},
	extraReducers: function (builder) {
		builder
			.addCase(fetchCoctailByCode.pending, function (state, action) {
				const cocktailCode = action.meta.arg;

				state.cocktails[cocktailCode].status = ASYNC_STATUS.PENDING;
			})
			.addCase(fetchCoctailByCode.fulfilled, function (state, action) {
				const cocktailCode = action.meta.arg;

				state.cocktails[cocktailCode].status = ASYNC_STATUS.SUCCEEDED;
				state.cocktails[cocktailCode].data = action.payload;
			})
			.addCase(fetchCoctailByCode.rejected, function (state, action) {
				const cocktailCode = action.meta.arg;

				state.cocktails[cocktailCode].status = ASYNC_STATUS.FAILED;
				state.cocktails[cocktailCode].data = [];
			});
	},
});

export default cocktailsSlice.reducer;
