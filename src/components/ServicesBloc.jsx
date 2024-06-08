import styles from './styles/servicesBloc.module.css';
// import Card from './Card.jsx';
import Titles from './Titles.jsx';

// eslint-disable-next-line react/prop-types
const ServicesBloc = ({ children }) => {
	return (
		<div className={styles['container']}>
			<Titles title={'serviceBlocTitle'} />
			<div className={styles['content']}>{children}</div>
		</div>
	);
};

export default ServicesBloc;
