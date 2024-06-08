import styles from './styles/title.module.css';
import ok from '../assets/Vector6.png';
// eslint-disable-next-line react/prop-types
const Title = ({
	titleHome1,
	titleHome2,
	titleHome3,
	noneText,
	titleSpan,
	titleSpan2,
	titleSpan3,
	titleSpan4,
}) => {
	return (
		<div className={styles['container_title']}>
			<div className={styles['']}>
				<p
					className={
						noneText ? styles.content_titleRevers : styles.content_title
					}
				>
					<span className={styles['title_text']}>{titleHome1}</span>
					<span className={styles['title_span']}>{titleHome2}</span>
				</p>
			</div>
			{!noneText ? (
				<>
					<div className={styles['title_text2']}>{titleHome3}</div>
				</>
			) : (
				<>
					<div className={styles['content_span']}>
						<img src={ok} alt='*' className={styles['img']} />
						<div className={styles['text']}>{titleSpan}</div>
					</div>
					<div className={styles['content_span']}>
						<img src={ok} alt='*' className={styles['img']} />
						<div className={styles['text']}>{titleSpan2}</div>
					</div>
					<div className={styles['content_span']}>
						<img src={ok} alt='*' className={styles['img']} />
						<div className={styles['text']}>{titleSpan3}</div>
					</div>
					<div className={styles['content_span']}>
						<img src={ok} alt='*' className={styles['img']} />
						<div className={styles['text']}>{titleSpan4}</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Title;
