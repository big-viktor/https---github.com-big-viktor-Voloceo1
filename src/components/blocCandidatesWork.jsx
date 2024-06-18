import styles from './styles/blocCandidatesWork.module.css';
import BacgCard from './BacgCard.jsx';
import ImgPc from '../assets/RectangleWork28.svg';
import Size from './Size.jsx';
import CardBorder from './cardBorder.jsx';
import Titles from './Titles.jsx';

const BlocCandidatesWork = () => {
	const screenSize = Size();
	const paramCard = {
		routerLink1: {
			name: 'cardBorderCandidates1',
		},
		routerLink2: {
			name: 'cardBorderCandidates2',
		},
		routerLink3: {
			name: 'cardBorderCandidates3',
		},
		routerLink4: {
			name: 'cardBorderCandidates4',
		},
		routerLink5: {
			name: 'cardBorderCandidates5',
		},
		routerLink6: {
			name: 'cardBorderCandidates6',
		},
	};
	return (
		<div className={styles['wrap']}>
			<div className={styles['container__title']}>
				<div className={styles['title_candidates']}>
					<Titles title='cardBorderCandidatesTitle' blackColor={false} />
				</div>
			</div>

			<div className={styles['container']}>
				{screenSize.width > 1540 ? (
					<>
						<div className={styles.container_component}>
							<BacgCard sendUrl={ImgPc} />
						</div>
					</>
				) : (
					<>
						<div className={styles.closed}></div>
					</>
				)}

				<div className={styles['content_card']}>
					{Object.entries(paramCard).map(([key, value]) => (
						<>
							<div className={styles['card']}>
								<CardBorder key={key} text={value.name} />
							</div>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default BlocCandidatesWork;
