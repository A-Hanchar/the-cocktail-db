import {DetailedHTMLProps, HTMLAttributes, JSX, ReactHTMLElement} from 'react';

import {TagName} from './tag-name';

export type GenericHTMLElement<T extends TagName> =
	JSX.IntrinsicElements[T] extends DetailedHTMLProps<HTMLAttributes<infer E>, infer E>
		? E
		: ReactHTMLElement<HTMLElement>;
