import styles from './styles/blocInfoCompany.module.css';
import '../i18next';
import { useTranslation } from 'react-i18next';

const BlocInfoCompany = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className={styles['wrap']}>
				<div className={styles['container']}>
					<div>
						<p className={styles['title']}>{t('blocInfoTitle')}</p>
					</div>
					<div className={styles['container_text']}>
						<div className={styles['blocInfoTextTwo']}>
							{t('textCompaniInfo')}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlocInfoCompany;
