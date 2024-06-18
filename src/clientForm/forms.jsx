import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import '../i18next.js';
import Button from '../components/Button.jsx';
import styles from './style/form.module.css';

const Form = () => {
	const { t } = useTranslation();

	const [name, setName] = useState('');
	const [email, setEmaill] = useState('');
	const [message, setMessage] = useState('');
	const [number, setNumber] = useState('');

	const [capVal, setCapVal] = useState();
	const [isOpen, setIsOpen] = useState();

	const [state, handleSubmit] = useForm('xvoeewby');

	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	return (
		<form onSubmit={handleSubmit} className={styles['container_form']}>
			<textarea
				className={styles['form_name']}
				placeholder={t(['formName'])}
				id='name'
				name='name'
				type='name'
				value={name}
				onChange={e => setName(e.target.value)}
				onFocus={val => setIsOpen(val)}
				required
			/>
			<ValidationError prefix='Nmae' field='name' errors={state.errors} />
			<textarea
				className={styles['form_name']}
				placeholder={t(['formNumber'])}
				id='number'
				type='number'
				name='number'
				value={number}
				onChange={e => setNumber(e.target.value)}
				onFocus={val => setIsOpen(val)}
				required
			/>
			<ValidationError
				prefix='Number'
				field='number'
				errors={state.errors}
				className={styles['erorr']}
			/>

			<textarea
				id='email'
				type='email'
				name='email'
				className={styles['form_name']}
				placeholder={t(['formMail'])}
				value={email}
				onChange={e => setEmaill(e.target.value)}
				onFocus={val => setIsOpen(val)}
				required
			/>
			<ValidationError
				prefix='Email'
				field='email'
				errors={state.errors}
				className={styles['erorr']}
			/>
			<textarea
				id='message'
				name='message'
				value={message}
				className={styles[('form_name', 'form_zprava')]}
				placeholder={t(['formMessage'])}
				onChange={e => setMessage(e.target.value)}
				required
			/>

			<ValidationError
				prefix='Message'
				field='message'
				errors={state.errors}
				className={styles['erorr']}
			/>
			<div className={!isOpen ? styles.close : styles.open}>
				<ReCAPTCHA
					sitekey='6LenuPspAAAAAPoFx1PURaojd453iGmOV9zFLaeJ'
					onChange={val => setCapVal(val)}
					disableds={!isOpen}
				/>
			</div>
			<div value='Send'>
				<Button name={'formButton'} disableds={!capVal} capVals={capVal} />
			</div>
		</form>
	);
};

export default Form;
