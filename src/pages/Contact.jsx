import React from 'react';
import Header from '../components/Layout1.jsx';

import '../i18next.js';
import Footer from '../components/Footer.jsx';

import BlocFormContact from '../components/formContact.jsx';
import BlocInfo from '../components/BlocInfo.jsx';
import BlocInfoСompani from '../components/blocInfoСompani.jsx';

function Contact() {
	return (
		<>
			<Header />
			<BlocFormContact />
			<BlocInfo />
			<BlocInfoСompani />
			<Footer />
		</>
	);
}
export default Contact;
