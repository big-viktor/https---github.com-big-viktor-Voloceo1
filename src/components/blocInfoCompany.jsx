import styles from './styles/blocInfoCompany.module.css';
import '../i18next';
import { useTranslation } from 'react-i18next';

import Button from './Button.jsx';
import Size from './Size.jsx';
const BlocInfoCompany = () => {
	const { t } = useTranslation();
	const screenSize = Size();
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
					<div className={screenSize.width > 900 ? styles.closed : styles.line}>
						<div className={styles['content_btn']}>
							<Button name={'btnInfoTitle'} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlocInfoCompany;
