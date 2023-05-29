import PropTypes from 'prop-types';

import './Button.css';

export const Button = ({ text, funcitonSubmit }) => {
	return (
		<button className='btn-basic' onClick={funcitonSubmit}>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	funcitonSubmit: PropTypes.func
};
