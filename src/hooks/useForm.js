import { useContext, useState } from 'react';
import { FormContext } from '../context/FormContext';

export const useForm = () => {
	const [email, setEmail] = useState('');
	const [errors, setErrors] = useState([]);
	const { setForm } = useContext(FormContext);

	const onInputchange = ({ target }) => {
		const { value } = target;
		setEmail(value);
	};

	const onHandleSubmit = () => {
		if (!email) {
			setErrors(['Valid email required']);
		} else {
			setErrors([]);
			setForm(() => {
				return {
					email: email,
					state: true

				};
			});
		}
	};

	const onHandleDimiss = () => {
		setForm({
			email: '',
			state: false
		});
	};

	return {
		email,
		errors,

		onHandleSubmit,
		onInputchange,
		onHandleDimiss
	};
};
