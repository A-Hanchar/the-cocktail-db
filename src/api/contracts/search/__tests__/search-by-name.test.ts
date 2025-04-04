import {http, HttpResponse} from 'msw';
import {setupServer} from 'msw/node';

import {urlPath} from '../../../end-points';
import {searchByName} from '../search-by-name';

const fakeResponseData = {content: {}};

const mockRequestHandler = [
	http.get(new RegExp(`${urlPath.search}.*`), () => {
		return HttpResponse.json(fakeResponseData);
	}),
];

export const server = setupServer(...mockRequestHandler);

describe('searchByName', () => {
	beforeAll(() => server.listen());

	afterEach(() => server.resetHandlers());

	afterAll(() => server.close());

	it('SHOULD return faked data', async () => {
		const {signal} = new AbortController();

		const response = await searchByName(signal, 'a1');

		expect(response.status).toBe(200);
		expect(response.statusText).toBe('OK');
		expect(response.data).toEqual(fakeResponseData);
		expect(response.config.url).toBe(`${urlPath.search}?s=a1`);
	});
});
