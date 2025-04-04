import {render, screen} from '@testing-library/react';

import {Box} from '../';

describe('<Box />', () => {
	it('SHOULD render component with default testID', () => {
		const {getByTestId} = render(<Box />);

		expect(getByTestId('box')).toBeInTheDocument();
	});

	it('SHOULD render component with passed testID', () => {
		const testID = 'testID';

		const {getByTestId} = render(<Box testID={testID} />);

		expect(getByTestId(testID)).toBeInTheDocument();
	});

	it('SHOULD render component with passed className', () => {
		const testClassName = 'test-class-name';

		render(<Box className={testClassName} />);

		const switchComponent = screen.getByTestId('box');

		expect(switchComponent).toHaveClass(testClassName);
	});
});
