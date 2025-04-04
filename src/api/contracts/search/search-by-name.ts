import {GenericAbortSignal} from 'axios';

import {CocktailCode, Response} from './types';
import axiosInstance from '../../axios-instance';
import {urlPath} from '../../end-points';
import {requestURL} from '../../utils/request-url';

export async function searchByName(signal: GenericAbortSignal, code: CocktailCode) {
	const url = requestURL(urlPath.search, {
		s: code,
	});

	return await axiosInstance.get<Response>(url, {
		signal,
	});
}
