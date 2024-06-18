import styles from './styles/blocOnas.module.css';
import ImgB from '../assets/Rectangle13.svg';
import { useTranslation } from 'react-i18next';
import SpanText from './spanText';

const BlocOnas = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className={styles['wrap']}>
				<div className={styles['container']}>
					<div className={styles['content_title']}>
						<div className={styles['title']}>{t('OnasTitle')}</div>
						<div className={styles['content_text']}>
							<SpanText titleHome2={t('titleHom2')} />
							{t('OnasText')}
						</div>
					</div>
					<div className={styles['content_img']}>
						<div className={styles['container_img']}>
							<div
								style={{ backgroundImage: `url(${ImgB})` }}
								className={styles['img']}
							></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlocOnas;
