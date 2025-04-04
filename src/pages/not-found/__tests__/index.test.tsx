import {render, screen} from '@testing-library/react';

import NotFound from '../';

describe('<NotFound />', () => {
	it('SHOULD match snapshot', () => {
		const {asFragment} = render(<NotFound />);

		expect(asFragment()).toMatchSnapshot();
	});

	it('SHOULD renders the not found message', () => {
		render(<NotFound />);

		const messageElement = screen.getByTestId('notFoundMessage');

		expect(messageElement).toHaveTextContent('Page is not Found');
	});
});
