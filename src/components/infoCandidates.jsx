import styles from './styles/infoCandidates.module.css';
import { useTranslation } from 'react-i18next';
import BacgCard from './BacgCard.jsx';
import ImgPc from '../assets/Rectangle39.png';
import ImgMini from '../assets/Rectangle39mini.png';
import Size from './Size.jsx';
import Viber from '../assets/Social Media/Social Media/viber2.png';
import Wath from '../assets/Social Media/Social Media/whatsap2.png';
import Teleg from '../assets/Social Media/Social Media/Telegram.png';
import SocialImg from './SocialImg';

const InfoCandidates = () => {
	const screenSize = Size();

	const { t } = useTranslation();
	return (
		<div className={styles['container']}>
			{screenSize.width > 1150 ? (
				<>
					<div className={styles.container_component}>
						<BacgCard sendUrl={ImgPc} />
					</div>
				</>
			) : (
				<>
					<div className={styles.container_component}>
						<BacgCard sendUrl={ImgMini} />
					</div>
				</>
			)}
			<div className={screenSize === 1400 ? styles.closed : styles.line}></div>

			<div className={styles['container_text']}>
				<div className={styles['text']}>{t('infoCandidatesText')}</div>
				<div className={styles['content_social__contact']}>
					<div className={styles['content_social']}>
						<SocialImg socialHref='socialHrefFo' srcSocial={Wath} />
						<SocialImg socialHref='socialHrefTwo' srcSocial={Teleg} />
						<SocialImg socialHref='socialHrefFaiv' srcSocial={Viber} />
					</div>
					<div>
						<div>
							<a className={styles['text']} href='tel:+420775493329'>
								(+420) 775 493 329
							</a>
						</div>
						<div>
							<a className={styles['text']} href='mailto:prace@veloceo.cz'>
								prace@veloceo.cz
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoCandidates;
