import '../i18next';
import { useTranslation } from 'react-i18next';

import '../../src/index.css';
import { useState } from 'react';
import styles from './styles/downMenu.module.css';
const DownMenu = ({ title, text }) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(true);

	return (
		<>
			<div className={styles.container}>
				<div className={styles.content}>
					<p className={styles.title}>{t([title])}</p>
					<div
						className={isOpen ? styles.plus : styles.minus}
						onClick={() => setIsOpen(!isOpen)}
					>
						{' '}
					</div>
				</div>
				<div className={isOpen ? styles.close : styles.open}>{t([text])}</div>
			</div>
		</>
	);
};

export default DownMenu;
