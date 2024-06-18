import styles from './styles/titleHom.module.css';
import { useTranslation } from 'react-i18next';
import Title from './Title.jsx';
import PictureBackground from './PictureBackground.jsx';
import rectagle from '../assets/Rectanglehom2.png';
import rectagleMini from '../assets/Rectanglehommin42.png';
import rectagleMini2 from '../assets/Rectangleminihom28.png';
const TitleHome = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className={styles['container_title_home']}>
				<div className={styles['content_title_home']}>
					<Title
						noneText={false}
						titleHome1={t('titleHom1')}
						titleHome2={t('titleHom2')}
						titleHome3={t('titleHom3')}
					/>
				</div>
				<PictureBackground
					sendUrl={rectagle}
					sendUrl2={rectagleMini}
					sendUrl3={rectagleMini2}
				/>
			</div>
		</>
	);
};

export default TitleHome;
