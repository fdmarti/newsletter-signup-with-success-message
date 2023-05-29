import { Form, ListItem } from '../index';
import './NewsLetter.css';

export const NewsLetter = () => {
	return (
		<div className='newsletter'>
			<h1>Stay update!</h1>
			<p>Join 60,000+ product managers receiving monthly updates on:</p>

			<section className='options'>
				<ListItem text='Product discovery and building what matters' />
				<ListItem text='Measuring to ensure updates are a success' />
				<ListItem text='And much more!' />
			</section>
			<Form />
		</div>
	);
};
