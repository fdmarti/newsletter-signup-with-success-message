import { useForm } from '../../hooks/useForm';
import { Button, ErrorMessage } from '../index';
import './Form.css';

export const Form = () => {
	const { email, errors, onInputchange, onHandleSubmit } = useForm();

	return (
		<div className='form'>
			<section className='text-input'>
				<label htmlFor='email'>Email address</label>
				{errors.length > 0 && <ErrorMessage />}
			</section>
			<input
				type='email'
				id='email'
				placeholder='email@company.com'
				value={email}
				name='email'
				onChange={onInputchange}
				className={errors.length > 0 ? 'error' : ''}
			/>
			<Button
				text='Suscribe to monthly newsletter'
				funcitonSubmit={onHandleSubmit}
			/>
		</div>
	);
};
