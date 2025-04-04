import {urlPath} from '../end-points';

describe('API Config Tests', () => {
	it('SHOULD have correct url paths', () => {
		expect(urlPath).toEqual({
			search: '/search.php',
		});
	});
});
