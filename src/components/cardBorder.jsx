import styles from './styles/cardBorder.module.css';
import '../i18next';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
const CardBorder = ({ text }) => {
	const { t } = useTranslation();

	return (
		<div className={styles['container']}>
			<div className={styles['card_text']}>{t([text])}</div>
		</div>
	);
};

export default CardBorder;
