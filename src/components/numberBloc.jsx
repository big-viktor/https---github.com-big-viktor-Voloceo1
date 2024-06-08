import styles from './styles/numberBloc.module.css';
import '../i18next';

const BlocNumber = ({ children }) => {
	return (
		<>
			<div className={styles['wrap']}>
				<div className={styles['container']}>{children}</div>
			</div>
		</>
	);
};

export default BlocNumber;
