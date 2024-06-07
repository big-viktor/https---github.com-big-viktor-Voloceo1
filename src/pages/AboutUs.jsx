import React from 'react';
import Header from '../components/Layout1.jsx';

import '../i18next';
import Footer from '../components/Footer.jsx';
import CardBlock from '../components/BlokCard.jsx';
import Card from '../components/card.jsx';

import ImgOne from '../assets/Frame75.svg';
import ImgTwo from '../assets/Frame76.svg';
import ImgThre from '../assets/Frame77.svg';
import BlocOnas from '../components/blocOnas';
import BlocInfoOnas from '../components/blocInfoOnas.jsx';
import BlocNumber from '../components/numberBloc.jsx';
import BlocOurTeam from '../components/blocOurTeam.jsx';

function AboutUs() {
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
			<BlocOnas />
			<BlocInfoOnas />
			<BlocNumber />
			<BlocOurTeam />
			<div className='margin'>
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
			</div>
			<Footer />
		</>
	);
}
export default AboutUs;
