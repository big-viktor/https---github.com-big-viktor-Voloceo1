import styles from './styles/formContact.module.css';
import { useTranslation } from 'react-i18next';
import '../i18next';
import FormHome from '../clientForm/formHome.jsx';

const BlocFormContact = () => {
	const { t } = useTranslation();
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
