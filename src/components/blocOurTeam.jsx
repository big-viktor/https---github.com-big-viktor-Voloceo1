import styles from './styles/ourTeam.module.css';
import { useTranslation } from 'react-i18next';
import '../i18next';
import Size from './Size.jsx';
import Titles from './Titles.jsx';
const BlocOurTeam = () => {
	const { t } = useTranslation();
	const screenSize = Size();
	return (
		<>
			<div className={styles['wrap']}>
				<div className={styles['content']}>
					<div className={styles['title']}>
						<Titles title={'ourTeamTitle'} blackColor={true} />
					</div>
					<div className={styles['text1']}>{t('ourTeamText')}</div>
					<div className={styles['text2']}>{t('ourTeamText2')}</div>
				</div>
			</div>
		</>
	);
};

export default BlocOurTeam;
