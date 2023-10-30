import { Card } from "../src/card";


export default {
    title: 'Action/Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export const Basic = {
    args: {
        label: 'Basic Card',
        children: 'Hello'
    },
};
