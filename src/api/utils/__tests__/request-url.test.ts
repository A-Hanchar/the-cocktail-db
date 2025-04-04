import {requestURL} from '../request-url';

describe('requestURL', () => {
	it('SHOULD return baseURL IF searchParameters undefined', () => {
		const baseURL = 'https://test.com';

		expect(requestURL(baseURL)).toBe(baseURL);
	});

	it('SHOULD return baseURL IF searchParameters is empty', () => {
		const baseURL = 'https://test.com';

		expect(requestURL(baseURL, {})).toBe(baseURL);
	});

	it('SHOULD append query parameters IF searchParameters are passed', () => {
		const baseURL = 'https://test.com';
		const searchParameters = {valueOne: 'valueOne', valueTwo: 'valueTwo'};
		const expectedURL = 'https://test.com?valueOne=valueOne&valueTwo=valueTwo';

		const result = requestURL(baseURL, searchParameters);
		expect(result).toBe(expectedURL);
	});
});
