import styles from './styles/pictureBackground.module.css';
import Size from './Size.jsx';
const PictureBackground = ({ sendUrl, sendUrl2, sendUrl3 }) => {
	const screenSize = Size();
	return (
		<>
			{screenSize.width > 970 ? (
				<>
					<div className={styles['container_blok_back']}>
						<div className={styles['block_image_basc']}>
							<div
								className={styles['image']}
								style={{ backgroundImage: `url(${sendUrl})` }}
							></div>
						</div>
					</div>
				</>
			) : (
				<>
					{screenSize.width > 520 ? (
						<div className={styles['container_blok_back']}>
							<div className={styles['block_image_basc']}>
								<div
									className={styles['image']}
									style={{ backgroundImage: `url(${sendUrl2})` }}
								></div>
							</div>
						</div>
					) : (
						<div className={styles['container_blok_back']}>
							<div className={styles['block_image_basc']}>
								<div
									className={styles['image']}
									style={{ backgroundImage: `url(${sendUrl3})` }}
								></div>
							</div>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default PictureBackground;
