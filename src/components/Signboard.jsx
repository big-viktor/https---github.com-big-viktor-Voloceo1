import '../i18next';
import { useTranslation } from 'react-i18next';
import '../../src/index.css';
import styles from './styles/signboard.module.css';

const SignBoard = ({ number, numberTwo, text, textTwo }) => {
	const { t } = useTranslation();

	return (
		<>
			<div className={styles['container']}>
				<div className={styles['container_board']}>
					<div className={styles['content_board']}>
						<p className={styles['number_board']}>{t([number])}</p>
						<p className={styles['text_board']}>{t([text])}</p>
					</div>
					<div className={styles['partition']}></div>
					<div className={styles['content_board']}>
						<p className={styles['number_board']}>{t([numberTwo])}</p>
						<p className={styles['text_board']}>{t([textTwo])}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignBoard;
