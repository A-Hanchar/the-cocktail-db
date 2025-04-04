import {isObjectEmpty} from '@cocktailDB/utils';

export function requestURL(path: string, searchPatameters?: Record<string, string>) {
	if (searchPatameters !== undefined && !isObjectEmpty(searchPatameters)) {
		const urlSearchParams = new URLSearchParams(searchPatameters);

		return `${path}?${urlSearchParams.toString()}`;
	}

	return path;
}
