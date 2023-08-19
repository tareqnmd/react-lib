import { Input } from "./Input";

export default {
	component: Input,
	title: 'UI/Input',
	tags: ['autodocs'],
};

export const InputText = {
	args: {
		type: 'text',
	},
	parameters: {
		layout: 'centered'
	}
};

export const InputEmail = {
	args: {
		type: 'email',
	},
	parameters: {
		layout: 'centered'
	}
};

export const InputPassword = {
	args: {
		type: 'password',
	},
	parameters: {
		layout: 'centered'
	}
};


