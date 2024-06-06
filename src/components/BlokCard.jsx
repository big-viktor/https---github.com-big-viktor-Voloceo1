import styles from './styles/cardBloc.module.css';
import Titles from './titles.jsx';

const CardBlock = ({ children }) => {
	return (
		<div className={styles['container_content2']}>
			<div className={styles['container']}>
				<div className={styles['container_title']}>
					<Titles title={'cardBlockTitle'} />
				</div>
				<div className={styles['container_content']}>
					<div className={styles['container_title_n1']}>
						<Titles title={'cardBlockTitle'} />
					</div>
					{children}
				</div>
			</div>
		</div>
	);
};

export default CardBlock;
