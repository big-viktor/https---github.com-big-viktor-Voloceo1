import React from 'react';
import styles from '../components/styles/servicesBloc.module.css';

import Header from '../components/Layout1.jsx';
import TitleHome from '../components/TitleHome.jsx';
import SignBoard from '../components/Signboard.jsx';
import InfoHome from '../components/InfoHome.jsx';
import CallWork from '../components/CallWork.jsx';
import ImgWork from '../assets/Rectangle14.svg';
import ServicesBloc from '../components/ServicesBloc.jsx';
import '../i18next';
import BlackBlok from '../components/BlackBlok.jsx';
import BlocFormHom from '../components/BlocFormHom.jsx';
import BlocInfo from '../components/BlocInfo.jsx';
import Footer from '../components/Footer.jsx';

import CardImg from '../components/CardImg.jsx';

import ImgOne from '../assets/Rectangle 18.svg';
import ImgTwo from '../assets/Rectangle 20.svg';
import ImgThre from '../assets/Rectangle 22.svg';

const ForCandidates = () => {
	const paramCard = {
		routerLink1: {
			name: 'serviceBlocTitleOne',
			infoText: 'serviceBlocTextOne',
			foto: ImgOne,
		},
		routerLink2: {
			name: 'serviceBlocTitleTwo',
			infoText: 'serviceBlocTextTwo',
			foto: ImgTwo,
		},
		routerLink3: {
			name: 'serviceBlocTitleThre',
			infoText: 'serviceBlocTextThre',
			foto: ImgThre,
		},
	};
	return (
		<>
			<Header />
			<TitleHome />
			<SignBoard />

			<InfoHome />
			<CallWork sendUrl={ImgWork} />
			<ServicesBloc>
				{Object.entries(paramCard).map(([key, value]) => (
					<>
						<div className={styles['content_card']}>
							<CardImg
								key={key}
								img={value.foto}
								title={value.name}
								text={value.infoText}
							/>
						</div>
					</>
				))}
			</ServicesBloc>
			<BlackBlok
				text={'blackText'}
				title={'blackTitle'}
				btnName={'btnName'}
				showBtn={true}
			/>
			<BlocFormHom
				subject={'formHome'}
				text={'formTextHome'}
				title={'formTitleHom'}
			/>
			<div className='margin'>
				<BlocInfo />
			</div>
			<Footer />
		</>
	);
};
export default ForCandidates;
