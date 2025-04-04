import {Box, Text} from '@cocktailDB/kit';

import styles from './index.module.css';

export default function () {
	return (
		<Box className={styles.container}>
			<Text testID='notFoundMessage' as='h1' size='36px'>
				Page is not Found
			</Text>

			<img
				src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg'
				alt='Page not Found'
			/>
		</Box>
	);
}
