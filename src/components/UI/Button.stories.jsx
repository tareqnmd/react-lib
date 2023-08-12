import { Button } from "./Button";

export default {
	component: Button,
	title: 'UI/Button',
	tags: ['autodocs'],
};

export const PrimaryButton = {
	args: {
		type: 'primary',
	},
	parameters: {
		layout: 'centered'
	}
};

export const SecondaryButton = {
	args: {
		type: 'secondary'
	},
	parameters: {
		layout: 'centered'
	}
};
