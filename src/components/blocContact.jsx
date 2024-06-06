import styles from './styles/numberBloc.module.css';
import '../i18next';
import { useTranslation } from 'react-i18next';
import '../i18next';
import Size from './size';
const BlocContact = () => {
	const { t } = useTranslation();
	const screenSize = Size();
	const paramContainer = {
		routerLink1: {
			number: 'numberBloc',
			text: 'textBloc',
		},
		routerLink2: {
			number: 'numberBloc2',
			text: 'textBloc2',
		},
		routerLink3: {
			number: 'numberBloc3',
			text: 'textBloc3',
		},
		routerLink4: {
			number: 'numberBloc4',
			text: 'textBloc3',
		},
		routerLink5: {
			number: 'numberBloc5',
			text: 'textBloc5',
		},
	};
	return (
		<>
			<div className={styles['wrap']}>
				<div className={styles['container']}>
					{Object.entries(paramContainer).map(([key, value], i) => (
						<>
							<div key={key} className={styles['content']}>
								<div className={styles['number']}> {t([value.number])}</div>
								<div className={styles['text']}>{t([value.text])}</div>
							</div>
						</>
					))}
				</div>
			</div>
		</>
	);
};

export default BlocContact;
