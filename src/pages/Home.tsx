import React from 'react';
import Header from '../components/layout1.jsx';
import TitleHome from '../components/titleHome.jsx';
import Signboard from '../components/signboard.jsx';
import CardBlock from '../components/blokCard.jsx';
import InfoHome from '../components/infoHome.jsx';
import CallWork from '../components/ballWork.jsx';
import ImgWork from '../assets/Rectangle14.svg';
import ServicesBloc from '../components/servicesBloc.jsx';
import '../i18next';
import BlackBlok from '../components/blackBlok.jsx';
import BlocFormHom from '../components/blocFormHom.jsx';
import BlocInfo from '../components/blocInfo.jsx';
import Footer from '../components/footer.jsx';
import ImgOne from '../assets/Frame75.svg';
import ImgTwo from '../assets/Frame76.svg';
import ImgThre from '../assets/Frame77.svg';
import Card from '../components/card.jsx';

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
	return (
		<>
			<Header />
			<TitleHome />
			<Signboard />
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
			<ServicesBloc />
			<BlackBlok
				text={'blackText'}
				title={'blackTitle'}
				btnName={'btnName'}
				showBtn={true}
			/>
			<BlocFormHom />
			<BlocInfo />
			<Footer />
		</>
	);
};
export default Home;
