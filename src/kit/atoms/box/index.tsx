import classNames from 'classnames';
import {ComponentPropsWithoutRef, forwardRef} from 'react';

import styles from './index.module.css';
import {BaseComponentProps} from '../../types/base-component-props';

type Props = BaseComponentProps & ComponentPropsWithoutRef<'div'>;

export const Box = forwardRef<HTMLDivElement, Props>(
	({testID = 'box', className, children, ...props}, forwardedRef) => (
		<div data-test-id={testID} className={classNames(styles.box, className)} ref={forwardedRef} {...props}>
			{children}
		</div>
	),
);
