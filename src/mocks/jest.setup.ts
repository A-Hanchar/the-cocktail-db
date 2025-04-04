import {configure as rtlConfigure} from '@testing-library/dom';
import '@testing-library/jest-dom';

rtlConfigure({
	testIdAttribute: 'data-test-id',
});
