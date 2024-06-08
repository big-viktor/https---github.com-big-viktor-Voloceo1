import styles from './styles/titleHom.module.css';
import { useTranslation } from 'react-i18next';
import Title from './Title.jsx';
import PictureBackground from './PictureBackground.jsx';

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
				<PictureBackground />
			</div>
		</>
	);
};

export default BaneCandidates;
