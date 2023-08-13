import './Button.css';

export const Button = ({ type = 'primary' }) => {
	return <button className={type === 'primary' ? 'primary-button' : type === 'secondary' ? 'secondary-button' : ''}>Save</button>;
};
