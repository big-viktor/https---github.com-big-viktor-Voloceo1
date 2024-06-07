import React from 'react';
import Header from '../components/Layout1.jsx';

import '../i18next';
import Footer from '../components/Footer.jsx';

import ImgOne from '../assets/Frame75.svg';
import ImgTwo from '../assets/Frame76.svg';
import ImgThre from '../assets/Frame77.svg';
import BlocFormContact from '../components/formContact.jsx';
import BlocInfo from '../components/blocInfo.jsx';

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
