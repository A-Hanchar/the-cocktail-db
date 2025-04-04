import {PropsWithChildren} from 'react';
import './theme.css';

import 'modern-css-reset';

export function ThemeProvider({children}: PropsWithChildren) {
	return <>{children}</>;
}
