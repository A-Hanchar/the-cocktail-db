import {JSX, PropsWithChildren} from 'react';

import {BaseComponentProps} from '../../../types/base-component-props';
import {GenericHTMLElement} from '../../../types/generic-html-element';

export type TextTag = keyof Pick<JSX.IntrinsicElements, 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

export type TextSize = '36px' | '24px' | '16px';

export type TextProps<T extends TextTag = TextTag> = BaseComponentProps &
	PropsWithChildren<{
		as: T;
		className?: string;
		weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
		uppercase?: boolean;
		size?: TextSize;
		color?: 'base' | 'light' | 'negative' | 'yellow' | 'inherit' | 'currentColor';
		ref?: React.Ref<GenericHTMLElement<T>>;
	}>;
