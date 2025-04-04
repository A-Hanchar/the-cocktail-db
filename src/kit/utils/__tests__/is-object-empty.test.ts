import {isObjectEmpty} from '../is-object-empty';

describe('isObjectEmpty function', () => {
	it('SHOULD return true for an empty object', () => {
		const result = isObjectEmpty({});

		expect(result).toBeTruthy();
	});

	it('SHOULD return true for null', () => {
		const result = isObjectEmpty(null);

		expect(result).toBeTruthy();
	});

	it('SHOULD return false for a non-empty object', () => {
		const result = isObjectEmpty({test: 'value'});

		expect(result).toBe(false);
	});

	it('SHOULD throw an error IF the parameter is not an object', () => {
		expect(() => isObjectEmpty(123)).toThrow('obj is not object');
		expect(() => isObjectEmpty('string')).toThrow('obj is not object');
		expect(() => isObjectEmpty([])).toThrow('obj is not object');
		expect(() => isObjectEmpty(new Date())).toThrow('obj is not object');
	});
});
