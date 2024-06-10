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

const ContactCandidates = () => {
	const screenSize = Size();

	const { t } = useTranslation();
	return <div className={styles['container']}>s</div>;
};

export default ContactCandidates;
