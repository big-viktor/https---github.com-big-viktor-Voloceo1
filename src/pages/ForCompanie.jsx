import React from 'react';
import Header from '../components/Layout1.jsx';

import '../i18next';
import Footer from '../components/Footer.jsx';

import BlocFormHom from '../components/BlocFormHom.jsx';
import BlocInfoCompany from '../components/blocInfoCompany.jsx';

function FormCopmanie() {
	return (
		<>
			<Header />
			<BlocInfoCompany />
			<BlocFormHom text={'textFormCompani'} title={'titleFormCompani'} />
			<div className='margin'></div>
			<Footer />
		</>
	);
}
export default FormCopmanie;
