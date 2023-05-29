import './SuccessMessage.css';
import { Button } from '../Button/Button';
import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

export const SuccessMessage = () => {
	const { form } = useContext(FormContext);
	const { onHandleDimiss } = useForm();

	return (
		<div className='main-card-success-message'>
			<img
				src='/assets/images/icon-list.svg'
				alt='icon for the list in the sign up form'
				className='icon-list'
			/>
			<h1>Thanks for suscribing!</h1>
			<p>
				A confirmation email has been sent to
				<span className='email-confirmation'> {form.email}</span>. Please
				open it and click the button inside to confirm your subscription.
			</p>
			<Button text='Dismiss message' funcitonSubmit={onHandleDimiss}/>
		</div>
	);
};
