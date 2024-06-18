import styles from './styles/servicesBloc.module.css';
// import Card from './Card.jsx';
import Titles from './Titles.jsx';

// eslint-disable-next-line react/prop-types
const ServicesBloc = ({ children }) => {
	return (
		<div className={styles['container']}>
			<div className={styles['title']}>
				<Titles title={'serviceBlocTitle'} />
			</div>
			<div className={styles['content']}>{children}</div>
		</div>
	);
};

export default ServicesBloc;
