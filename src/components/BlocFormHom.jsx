import styles from './styles/blokForma.module.css';
import '../i18next.js';
import Titles from './Titles.jsx';
import TextTitle from './TextTitle.jsx';
import FormHome from '../clientForm/formHome.jsx';
import BacgCard from './BacgCard.jsx';
import ImgB from '../assets/Rectangle24.svg';
// eslint-disable-next-line react/prop-types
const BlocFormHom = () => {
	return (
		<>
			<div className={styles['container_form']}>
				<div className={styles['content_title']}>
					<Titles title={'formTitleHom'} />
					<div className={styles['content_text']}>
						<TextTitle title={'formTextHome'} />
					</div>
				</div>
				<div className={styles['content_bloc']}>
					<div className={styles['bloc_form']}>
						<FormHome />
					</div>
					<div className={styles['content_img']}>
						<BacgCard sendUrl={ImgB} direction={true} />
					</div>
				</div>
			</div>
		</>
	);
};

export default BlocFormHom;
