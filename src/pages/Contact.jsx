import React from 'react';
import Header from '../components/layout1';

import '../i18next';
import Footer from '../components/footer';

import ImgOne from '../assets/Frame75.svg';
import ImgTwo from '../assets/Frame76.svg';
import ImgThre from '../assets/Frame77.svg';
import BlocFormContact from '../components/formContact';
import BlocInfo from '../components/blocInfo';

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
			<Header />
			<BlocFormContact />
			<BlocInfo />
			<Footer />
		</>
	);
}
export default Contact;
