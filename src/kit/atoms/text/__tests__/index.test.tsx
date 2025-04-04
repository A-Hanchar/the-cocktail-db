import {render, screen} from '@testing-library/react';

import {Text} from '../';
import {TextTag} from '../types';

describe('<Text />', () => {
	it('SHOULD match snapshot', () => {
		const {asFragment} = render(<Text as='h1' />);

		expect(asFragment()).toMatchSnapshot();
	});

	it('SHOULD render component with default testID', () => {
		const {getByTestId} = render(<Text as='p' />);

		expect(getByTestId('text')).toBeInTheDocument();
	});

	it('SHOULD render component with passed testID', () => {
		const testID = 'testID';

		const {getByTestId} = render(<Text as='p' testID={testID} />);

		expect(getByTestId(testID)).toBeInTheDocument();
	});

	it('SHOULD render the passed children', () => {
		render(<Text as='p'>Test content</Text>);

		expect(screen.getByText('Test content')).toBeInTheDocument();
	});

	it('SHOULD apply correct class names', () => {
		render(<Text as='p' color='yellow' size='36px' weight='700' uppercase className='custom-class' />);

		const textElement = screen.getByTestId('text');

		expect(textElement).toHaveClass('ui-text');
		expect(textElement).toHaveClass('color-yellow');
		expect(textElement).toHaveClass('weight-700');
		expect(textElement).toHaveClass('size-36px');
		expect(textElement).toHaveClass('uppercase');
		expect(textElement).toHaveClass('custom-class');
	});

	it.each<{tag: TextTag}>([{tag: 'h1'}, {tag: 'p'}, {tag: 'span'}, {tag: 'h4'}])(
		'SHOULD render correct tag - $tag',
		({tag}) => {
			const {getByTestId} = render(<Text as={tag} />);

			expect(getByTestId('text').tagName.toLowerCase()).toBe(tag);
		},
	);
});
