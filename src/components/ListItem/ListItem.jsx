import PropTypes from 'prop-types';
import './ListItem.css';
export const ListItem = ({ text }) => {
	return (
		<section className='option'>
			<img
				src='/assets/images/icon-list.svg'
				alt='icon for the list in the sign up form'
				className='icon-list'
			/>
			<p className='text-list'>{text}</p>
		</section>
	);
};

ListItem.propTypes = {
	text: PropTypes.string.isRequired
};
