import styles from './styles/blockQuestions.module.css';
import '../i18next';
import { useTranslation } from 'react-i18next';
import Titles from './Titles.jsx';
import DownMenu from './downMenu.jsx';

const BlockQuestions = () => {
	const showQuestions = {
		routerLink: {
			title: 'titleQuestions',
			text: 'showTextQuestions',
		},
		routerLink2: {
			title: 'titleQuestions2',
			text: 'showTextQuestions2',
		},
		routerLink3: {
			title: 'titleQuestions3',
			text: 'showTextQuestions3',
		},
		routerLink5: {
			title: 'titleQuestions5',
			text: 'showTextQuestions5',
		},
		routerLink6: {
			title: 'titleQuestions6',
			text: 'showTextQuestions6',
		},
		routerLink7: {
			title: 'titleQuestions7',
			text: 'showTextQuestions7',
		},
		routerLink8: {
			title: 'titleQuestions8',
			text: 'showTextQuestions8',
		},
	};

	const { t } = useTranslation();

	return (
		<>
			<div className={styles['wrap']}>
				<div className={styles['container']}>
					<div className={styles['content_text']}>
						<Titles title={'titleBlocQuestions'} />
						<div className={styles['text']}>{t('textBlocQuestions')}</div>
					</div>
					<div className={styles['content_menu']}>
						{Object.entries(showQuestions).map(([key, value]) => (
							<>
								<DownMenu key={key} title={value.title} text={value.text} />
							</>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default BlockQuestions;
