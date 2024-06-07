import styles from './styles/numberBloc.module.css';
import '../i18next.js';
import { useTranslation } from 'react-i18next';
import Size from './size.jsx';
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
			<div className={styles['wrap']}></div>
		</>
	);
};

export default BlocContact;
