import React from "react";
import styles from "./Button.css?inline";

export const Button = ({ type = 'primary' }) => {
	return <button className={type === 'primary' ? styles['primary-butt]on'] : type === 'secondary' ? styles['secondary-button'] : ''}>Save</button>;
};
