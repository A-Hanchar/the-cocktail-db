import {Box, Text} from '@cocktailDB/kit';
import {ASYNC_STATUS} from '@cocktailDB/store';
import {OverlayScrollbarsComponent} from 'overlayscrollbars-react';
import {Fragment} from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import {AdditionalBox} from './components/additional-box';
import {useCoctailData} from './hooks/use-coctail-data';
import styles from './index.module.css';

export default function () {
	const data = useCoctailData();

	if (data === null) {
		return <AdditionalBox title='Sorry, Cocktail Not Found!' />;
	}

	if (data.status === ASYNC_STATUS.PENDING) {
		return <AdditionalBox title='Loading' />;
	}

	return (
		<OverlayScrollbarsComponent
			defer
			style={{
				height: 'calc(100% + 0px)',
			}}
			options={{
				scrollbars: {autoHide: 'leave'},
				paddingAbsolute: true,
			}}
		>
			<section data-test-id='section' className={styles.container}>
				{data.data.map(
					(
						{id, ingredientsWithMeasure, strAlcoholic, strCategory, strDrink, strDrinkThumb, strGlass, strInstructions},
						index,
					) => (
						<Fragment key={id}>
							<Box testID='cocktailCardBox' className={styles.cardContainer}>
								<Box className={styles.description}>
									<Box className={styles.descriptionBlock}>
										<Text as='h1' size='36px'>
											{strDrink}
										</Text>
										<Text as='p'>{strCategory}</Text>
										<Text as='p'>{strAlcoholic}</Text>
										<Text as='p'>{strGlass}</Text>
									</Box>

									<Box className={styles.descriptionBlock}>
										<Text as='h2' size='24px'>
											Instructions:
										</Text>
										<Text as='p'>{strInstructions ?? '-'}</Text>
									</Box>

									<Box className={styles.descriptionBlock}>
										<Text as='h3' size='24px'>
											List of ingredients:
										</Text>

										<ul>
											{ingredientsWithMeasure.map(({ingredient, measure}, index) => (
												<li key={`${measure ?? ''}-${ingredient}-${index}`}>
													<Text as='span'>
														{measure} {ingredient}
													</Text>
												</li>
											))}
										</ul>
									</Box>
								</Box>

								<LazyLoadImage src={strDrinkThumb} alt={strDrink} threshold={0} />
							</Box>

							{data.data.length - 1 !== index && <Box data-test-id='divider' className={styles.divider} />}
						</Fragment>
					),
				)}
			</section>
		</OverlayScrollbarsComponent>
	);
}
