import {Box, Text} from '@cocktailDB/kit';

import styles from './index.module.css';

type Props = {
	title: string;
};

export function AdditionalBox({title}: Props) {
	return (
		<Box className={styles.additionalBox}>
			<Text as='h1' size='36px'>
				{title}
			</Text>
		</Box>
	);
}
