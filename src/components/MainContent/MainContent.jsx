import { useContext } from 'react';
import { MainCardSignUp, SuccessMessage } from '../index';
import { FormContext } from '../../context/FormContext';

export const MainContent = () => {
	const { form } = useContext(FormContext);

	return (
		<>
			{!form.state
				? <MainCardSignUp />
				: <SuccessMessage/>}
		</>
	);
};
