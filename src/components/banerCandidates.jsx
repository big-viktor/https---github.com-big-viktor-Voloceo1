import styles from './styles/titleHom.module.css';
import { useTranslation } from 'react-i18next';
import Title from './Title.jsx';
import PictureBackground from './PictureBackground.jsx';
import rectagle from '../assets/Rectangle2candidat.svg';
import rectagleMini from '../assets/RectangleMini2.png';
import rectagleMini2 from '../assets/RectangleMini61.png';

const BaneCandidates = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className={styles['container_title_home']}>
				<div className={styles['content_title_home']}>
					<Title
						noneText={true}
						titleHome1={t('titleBanerCandidates')}
						titleHome2={t('spanBanerCandidates')}
						titleSpan={t('banerTitleCandidates')}
						titleSpan2={t('banerTitleCandidates2')}
						titleSpan3={t('banerTitleCandidates3')}
						titleSpan4={t('banerTitleCandidates4')}
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

export default BaneCandidates;
