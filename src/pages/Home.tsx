import React from 'react';
import styles from '../components/styles/servicesBloc.module.css';
import Header from '../components/Layout1.jsx';
import TitleHome from '../components/TitleHome.jsx';
import SignBoard from '../components/Signboard.jsx';
import CardBlock from '../components/BlokCard.jsx';
import InfoHome from '../components/InfoHome.jsx';
import CallWork from '../components/CallWork.jsx';
import ImgWork from '../assets/Rectangle14.svg';
import ServicesBloc from '../components/ServicesBloc.jsx';
import '../i18next';
import BlackBlok from '../components/BlackBlok.jsx';
import BlocFormHom from '../components/BlocFormHom.jsx';
import BlocInfo from '../components/BlocInfo.jsx';
import Footer from '../components/Footer.jsx';
import ImgOne from '../assets/Frame75.svg';
import ImgTwo from '../assets/Frame76.svg';
import ImgThre from '../assets/Frame77.svg';
import Card from '../components/card.jsx';
import CardImg from '../components/CardImg.jsx';
import ImgOne1 from '../assets/Rectangle 18.svg';
import ImgTwo1 from '../assets/Rectangle 20.svg';
import ImgThre1 from '../assets/Rectangle 22.svg';

const Home = () => {
	const paramCard = {
		routerLink1: {
			name: 'cardTitleOne',
			infoText: 'cardTextOne',
			foto: ImgOne,
		},
		routerLink2: {
			name: 'cardTitleTwo',
			infoText: 'cardTextTwo',
			foto: ImgTwo,
		},
		routerLink3: {
			name: 'cardTitleThre',
			infoText: 'cardTextThre',
			foto: ImgThre,
		},
	};

	const paramCards = {
		routerLink1: {
			name: 'serviceBlocTitleOne',
			infoText: 'serviceBlocTextOne',
			foto: ImgOne1,
		},
		routerLink2: {
			name: 'serviceBlocTitleTwo',
			infoText: 'serviceBlocTextTwo',
			foto: ImgTwo1,
		},
		routerLink3: {
			name: 'serviceBlocTitleThre',
			infoText: 'serviceBlocTextThre',
			foto: ImgThre1,
		},
	};
	return (
		<>
			<Header />
			<TitleHome />
			<SignBoard />
			<CardBlock>
				{Object.entries(paramCard).map(([key, value], i) => (
					<>
						<Card
							key={key}
							img={value.foto}
							title={value.name}
							text={value.infoText}
						/>
					</>
				))}
			</CardBlock>
			<InfoHome />
			<CallWork sendUrl={ImgWork} />
			<ServicesBloc>
				{Object.entries(paramCards).map(([key, value]) => (
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
export default Home;
