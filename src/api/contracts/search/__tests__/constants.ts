import {ALL_COCKTAILS_CODES} from '../constants';

describe('constants', () => {
	it('SHOULD have correct cocktails codes', () => {
		expect(ALL_COCKTAILS_CODES).toEqual(['margarita', 'mojito', 'a1', 'kir']);
	});
});
