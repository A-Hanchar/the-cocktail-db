export function isObjectEmpty(obj: unknown): boolean {
	if (obj === null) {
		return true;
	}

	const isObjectType = typeof obj === 'object' && toString.call(obj) === '[object Object]';

	if (!isObjectType) {
		throw new Error('obj is not object');
	}

	return Object.keys(obj).length === 0;
}
