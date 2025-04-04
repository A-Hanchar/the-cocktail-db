import {store} from '@cocktailDB/store';
import {ThemeProvider} from '@cocktailDB/theme';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';

import {Routing} from './routing';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<Routing />
			</ThemeProvider>
		</Provider>
	</StrictMode>,
);
