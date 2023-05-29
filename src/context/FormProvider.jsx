import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormContext } from './FormContext';

export const FormProvider = ({ children }) => {
	const [form, setForm] = useState({ state: false, email: '' });

	return (
		<FormContext.Provider value={{ form, setForm }}>
			{children}
		</FormContext.Provider>
	);
};

FormProvider.propTypes = {
	children: PropTypes.object
};
