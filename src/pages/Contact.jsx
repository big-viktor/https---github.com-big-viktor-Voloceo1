import React from 'react';
import Layout from '../components/layout1';

import '../i18next';
import Footer from '../components/footer';
import CardBlock from '../components/blokCard';
import Card from '../components/bard';

import ImgOne from '../assets/Frame75.svg';
import ImgTwo from '../assets/Frame76.svg';
import ImgThre from '../assets/Frame77.svg';
import BlocOnas from '../components/blocOnas';
import BlocInfoOnas from '../components/blocInfoOnas';
import BlocNumber from '../components/numberBloc';
import BlocOurTeam from '../components/blocOurTeam';

function Contact() {
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
			<Layout />
			<BlocOnas />
			<BlocInfoOnas />
			<BlocNumber />
			<BlocOurTeam />
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
			<Footer />
		</>
	);
}
export default Contact;
