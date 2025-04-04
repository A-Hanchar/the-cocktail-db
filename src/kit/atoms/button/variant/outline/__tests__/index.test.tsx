import {render, screen} from '@testing-library/react';

import {Outline} from '..';

describe('<Button.Outline />', () => {
	it('SHOULD match snapshot', () => {
		const {asFragment} = render(<Outline>Button</Outline>);

		expect(asFragment()).toMatchSnapshot();
	});

	it('SHOULD render component with default testID', () => {
		const {getByTestId} = render(<Outline />);

		expect(getByTestId('button-outline')).toBeInTheDocument();
	});

	it('SHOULD render component with passed testID', () => {
		const testID = 'testID';

		const {getByTestId} = render(<Outline testID={testID} />);

		expect(getByTestId(testID)).toBeInTheDocument();
	});

	it('SHOULD render component with passed className', () => {
		const testClassName = 'test-class-name';

		render(<Outline className={testClassName} />);

		const switchComponent = screen.getByTestId('button-outline');

		expect(switchComponent).toHaveClass(testClassName);
	});
});
