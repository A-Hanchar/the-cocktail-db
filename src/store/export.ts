import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import cocktailsReducer from './slices/cocktails-slice';

export const store = configureStore({
	reducer: {
		cocktails: cocktailsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export {useCoctails} from './slices/cocktails-slice/use-coctails';
export {type CocktailModel as CocktailModelStore} from './slices/cocktails-slice/types';
export {ASYNC_STATUS} from './slices/types';
