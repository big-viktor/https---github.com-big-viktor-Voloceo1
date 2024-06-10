import React from 'react';
import styles from '../components/styles/servicesBloc.module.css';

import Header from '../components/Layout1.jsx';
import SignBoard from '../components/Signboard.jsx';
import CallWork from '../components/CallWork.jsx';
import ImgWork from '../assets/Rectangle54.png';
import ServicesBloc from '../components/ServicesBloc.jsx';
import '../i18next';
import BlackBlok from '../components/BlackBlok.jsx';
import BlocFormHom from '../components/BlocFormHom.jsx';
import Footer from '../components/Footer.jsx';

import CardImg from '../components/CardImg.jsx';

import ImgOne from '../assets/Rectangle20.png';
import ImgTwo from '../assets/Rectangle18.png';
import ImgThre from '../assets/Rectangle22.png';
import ImgFoo from '../assets/Rectangle56.png';
import ImgFaive from '../assets/Rectangle57.png';
import ImgSix from '../assets/Rectangle58.png';

import BanerCandidates from '../components/banerCandidates.jsx';
import InfoCandidates from '../components/infoCandidates.jsx';
import ContactCandidates from '../components/contactCandidates.jsx';
import BlocCandidatesWork from '../components/blocCandidatesWork.jsx';

const ForCandidates = () => {
	const paramCard = {
		routerLink1: {
			name: 'cardTitleCandidates',
			infoText: 'cardTextCandidates',
			foto: ImgOne,
		},
		routerLink2: {
			name: 'cardTitleCandidates2',
			infoText: 'cardTextCandidates2',
			foto: ImgTwo,
		},
		routerLink3: {
			name: 'cardTitleCandidates3',
			infoText: 'cardTextCandidates3',
			foto: ImgThre,
		},
		routerLink4: {
			name: 'cardTitleCandidates4',
			infoText: 'cardTextCandidates4',
			foto: ImgFoo,
		},
		routerLink5: {
			name: 'cardTitleCandidates5',
			infoText: 'cardTextCandidates5',
			foto: ImgFaive,
		},
		routerLink6: {
			name: 'cardTitleCandidates6',
			infoText: 'cardTextCandidates6',
			foto: ImgSix,
		},
	};
	return (
		<>
			<Header />

			<BanerCandidates />
			<SignBoard
				number={'numberCandidates'}
				numberTwo={'numberCandidates2'}
				text={'candidatesText1'}
				textTwo={'candidatesText2'}
			/>
			<BlocCandidatesWork />
			<CallWork
				sendUrl={ImgWork}
				color={true}
				sendColor='#000000'
				titles='titleCandidatesBaner'
				text='textCandidatesBaner'
				sendColorText='#FFFFFF'
				btnRef={true}
				btnName='btnNameCandidates'
			/>
			<ContactCandidates />
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
			<InfoCandidates />
			<BlocFormHom
				subject={'formCandidates'}
				text={'textCandidatesForm'}
				title={'titleCandidatesForm'}
			/>
			<div id='form_candidates'></div>

			<div className='margin'></div>
			<Footer />
		</>
	);
};
export default ForCandidates;
