import styles from './styles/contactCandidates.module.css';
import { useTranslation } from 'react-i18next';
import BacgCard from './BacgCard.jsx';
import ImgPc from '../assets/Rectangle39.png';
import ImgMini from '../assets/Rectangle39mini.png';
import Size from './Size.jsx';
import Viber from '../assets/Social Media/Social Media/whiteViber2.png';
import Wath from '../assets/Social Media/Social Media/whiteWath.png';
import Teleg from '../assets/Social Media/Social Media/whiteTelegram.png';
import Fc from '../assets/Social Media/Social Media/whiteFc.png';

import SocialImg from './SocialImg';

const ContactCandidates = () => {
	const screenSize = Size();

	const { t } = useTranslation();
	return (
		<div className={styles['container']}>
			<div className={styles['content']}>
				<div className={styles['text']}>{t('contactCandidates')}</div>
				<div className={styles['content_social']}>
					<SocialImg socialHref='socialHrefFaiv' srcSocial={Viber} />
					<SocialImg socialHref='socialHrefFo' srcSocial={Wath} />
					<SocialImg socialHref='socialHrefTwo' srcSocial={Teleg} />
					<SocialImg socialHref='socialHref' srcSocial={Fc} />
				</div>
			</div>
		</div>
	);
};

export default ContactCandidates;
