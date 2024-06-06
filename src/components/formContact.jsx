import styles from './styles/formContact.module.css';
import '../i18next';
import { useTranslation } from 'react-i18next';
import '../i18next';
// import Size from './size';
import FormHome from '../clientForm/formHome';
const BlocFormContact = () => {
	const { t } = useTranslation();
	// const screenSize = Size();
	// const paramContainer = {
	// 	routerLink1: {
	// 		number: 'numberBloc',
	// 		text: 'textBloc',
	// 	},
	// 	routerLink2: {
	// 		number: 'numberBloc2',
	// 		text: 'textBloc2',
	// 	},
	// 	routerLink3: {
	// 		number: 'numberBloc3',
	// 		text: 'textBloc3',
	// 	},
	// 	routerLink4: {
	// 		number: 'numberBloc4',
	// 		text: 'textBloc3',
	// 	},
	// 	routerLink5: {
	// 		number: 'numberBloc5',
	// 		text: 'textBloc5',
	// 	},
	// };
	return (
		<>
			<div className={styles['wrap']}>
				<div className={styles['container']}>
					<div className={styles['title']}> {t('ContactTitle')}</div>
					<div className={styles['content_bloc']}>
						<div className={styles['bloc_form']}>
							<FormHome />
						</div>
						<div className={styles['content_img']}>
							<div className={styles['container_img']}>
								<div className={styles['img']}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlocFormContact;
