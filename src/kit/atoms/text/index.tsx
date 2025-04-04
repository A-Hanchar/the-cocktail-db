import classNames from 'classnames';
import {createElement} from 'react';

import styles from './index.module.css';

import {TextProps, TextTag} from './types';

export const Text = <T extends TextTag = TextTag>({
	testID = 'text',
	as,
	className,
	uppercase,
	color = 'base',
	size = '16px',
	weight,
	children,
	ref,
	...restTextProps
}: TextProps<T>) =>
	createElement(
		as,
		{
			'data-test-id': testID,
			className: classNames(
				'ui-text',
				styles[`color-${color}`],
				Boolean(weight) && styles[`weight-${weight}`],
				styles[`size-${size}`],
				Boolean(uppercase) && styles.uppercase,
				className,
			),
			ref,
			...restTextProps,
		},
		children,
	);
