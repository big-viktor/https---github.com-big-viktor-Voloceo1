import styles from './styles/numberBloc.module.css';
import '../i18next';
import { useTranslation } from 'react-i18next';

const CardNumbr = ({ number, text }) => {
	const { t } = useTranslation();

	return (
		<>
			<div className={styles['content']}>
				<div className={styles['number']}> {t([number])}</div>
				<div className={styles['text']}>{t([text])}</div>
			</div>
		</>
	);
};

export default CardNumbr;
