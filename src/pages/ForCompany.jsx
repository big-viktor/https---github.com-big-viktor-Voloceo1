import React from 'react';
import Header from '../components/Layout1.jsx';

import '../i18next.js';
import Footer from '../components/Footer.jsx';

import BlocFormHom from '../components/BlocFormHom.jsx';
import BlocInfoCompany from '../components/blocInfoCompany.jsx';
import BlocNumber from '../components/numberBloc.jsx';
import CardNumbr from '../components/cardNumber.jsx';
import BlocEployees from '../components/blocEmployees.jsx';
import BlockQuestions from '../components/blockQuestions.jsx';

function FormCopmany() {
	const paramCardNumber = {
		routerLink2: {
			number: 'numberBloc2',
			text: 'textBloc2',
		},
		routerLink3: {
			number: 'numberBloc3',
			text: 'textBloc3',
		},
		routerLink4: {
			number: 'numberBloc4',
			text: 'textBloc3',
		},
		routerLink5: {
			number: 'numberBloc5',
			text: 'textBloc5',
		},
	};
	return (
		<>
			<Header />
			<BlocEployees />
			<BlocNumber>
				{Object.entries(paramCardNumber).map(([key, value], i) => (
					<>
						<CardNumbr key={key.i} number={value.number} text={value.text} />
					</>
				))}
			</BlocNumber>
			<BlocInfoCompany />
			<BlocFormHom
				subject={'formCompany'}
				text={'textFormCompani'}
				title={'titleFormCompani'}
			/>
			<BlockQuestions />
			<div className='margin'></div>
			<Footer />
		</>
	);
}
export default FormCopmany;
