import styles from './styles/title.module.css';
import { useTranslation } from 'react-i18next';
import '../i18next';
// eslint-disable-next-line react/prop-types
const SpanText = ({ titleHome2 }) => {
	const { t } = useTranslation();

	return (
		<div className={styles['container_span']}>
			<span className={styles['title_span']}>{titleHome2} </span>
			<span className={styles['title_span__span']}>{t('titleSpanR')}</span>
		</div>
	);
};

export default SpanText;
