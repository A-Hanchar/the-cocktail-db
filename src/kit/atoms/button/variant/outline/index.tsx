import classNames from 'classnames';
import {ComponentPropsWithoutRef, forwardRef} from 'react';

import styles from './index.module.css';
import {BaseComponentProps} from '../../../../types/base-component-props';

type Props = BaseComponentProps & ComponentPropsWithoutRef<'button'>;

export const Outline = forwardRef<HTMLButtonElement, Props>(
	({testID = 'button-outline', type = 'button', children, className, ...props}, forwardedRef) => (
		<button
			data-test-id={testID}
			type={type}
			className={classNames(styles.button, className)}
			ref={forwardedRef}
			{...props}
		>
			{children}
		</button>
	),
);
