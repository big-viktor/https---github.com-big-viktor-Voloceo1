import styles from './styles/button.module.css';
import { useTranslation } from 'react-i18next';
import '../i18next';

// eslint-disable-next-line react/prop-types
const Button = ({ name, disableds, capVals }) => {
	const { t } = useTranslation();
	return (
		<>
			<button
				type='submit'
				disabled={disableds}
				className={capVals ? styles.container_button : styles.Hover}
			>
				{t([name])}
			</button>
		</>
	);
};

export default Button;
