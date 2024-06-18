import styles from './styles/blocEployees.module.css';
import '../i18next';
import { useTranslation } from 'react-i18next';
import SpanText from './spanText.jsx';

const BlocEployees = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className={styles['wrap']}>
				<div className={styles['content']}>
					<div className={styles['container_title']}>
						<p className={styles['content_title']}>
							<span className={styles['title_text']}>
								{t('titleCompaniEmpoyees')}
							</span>
							<SpanText titleHome2={t('titleHom2')} />
						</p>
						<div className={styles['title_text2']}>
							{t('textCompaniEmpoyees')}
						</div>
					</div>
					<div className={styles['container_img']}>
						<div className={styles['content_img']}>
							<div className={styles['img1']}></div>
							<div className={styles['img2']}></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlocEployees;
