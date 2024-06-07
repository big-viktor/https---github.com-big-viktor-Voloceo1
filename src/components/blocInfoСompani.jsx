import '../i18next.js';
import styles from './styles/blocInfoСompani.module.css';
import { useTranslation } from 'react-i18next';
import '../i18next.js';

function BlocInfoСompani() {
	const { t } = useTranslation();

	return (
		<>
			<div className={styles['wrap']}>
				<div className={styles['container']}>
					<div className={styles['content']}>
						<div className={styles['title']}>{t('infoSro')}</div>
						<div className={styles['text']}>{t('infoSidlo')}</div>
						<div className={styles['text']}>{t('infoAdres')}</div>
						<div className={styles['text']}>{t('infoIc')}</div>
						<div className={styles['text']}>{t('infoDic')}</div>
					</div>
					<div className={styles['content']}>
						<div className={styles['title']}>{t('infoDatShranka')}</div>
						<div className={styles['text']}>{t('infoUcty')}</div>
						<div className={styles['text']}>{t('infoUct1')}</div>
						<div className={styles['text']}>{t('infoUct2')}</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default BlocInfoСompani;
