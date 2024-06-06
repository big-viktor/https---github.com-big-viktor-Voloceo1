import styles from './styles/blocInfoOnas.module.css';
import '../i18next';
import { useTranslation } from 'react-i18next';
import '../i18next';
import Button from './button.jsx';
import Size from './size.jsx';
const BlocInfoOnas = () => {
	const { t } = useTranslation();
	const screenSize = Size();
	return (
		<>
			<div className={styles['wrap']}>
				<div className={styles['container']}>
					<div>
						<p className={styles['title']}>{t('blocInfoTitle')}</p>
						<div className={styles['blocInfoTextOne']}>
							{t('blocInfoTextOne')}
						</div>
						<div className={styles['blocInfoTextTwo']}>
							{t('blocInfoTextTwo')}
						</div>
						<div
							className={screenSize.width < 900 ? styles.closed : styles.line}
						>
							<div className={styles['content_btn']}>
								<Button name={'btnInfoTitle'} />
							</div>
						</div>
					</div>
					<div className={styles['container_text']}>
						<div className={styles['blocInfoTextTwo']}>
							{t('blocInfoTextThre')}
						</div>
						<div className={styles['blocInfoTextTwo']}>
							{t('blocInfoTextFoo')}
						</div>
						<div className={styles['blocInfoTextTwo']}>
							{t('blocInfoTextThreFive')}
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

export default BlocInfoOnas;
