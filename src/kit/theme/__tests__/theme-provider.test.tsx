import {render} from '@testing-library/react';

import {ThemeProvider} from '../theme-provider';

jest.mock('modern-css-reset', () => {});

describe('<ThemeProvider />', () => {
	it('SHOULD renders children correctly', () => {
		const {getByText, container} = render(
			<ThemeProvider>
				<div>Hello, World!</div>
			</ThemeProvider>,
		);

		const element = getByText('Hello, World!');

		expect(element).toBeInTheDocument();
		expect(container.firstChild).toBeTruthy();
		expect(container.firstChild!.nodeName).toBe('DIV');
	});
});
