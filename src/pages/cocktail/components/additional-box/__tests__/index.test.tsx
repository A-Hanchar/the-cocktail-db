import {render} from '@testing-library/react';

import {AdditionalBox} from '../';

describe('<AdditionalBox />', () => {
	it('SHOULD match snapshot', () => {
		const {asFragment} = render(<AdditionalBox title='title-mock' />);

		expect(asFragment()).toMatchSnapshot();
	});
});
