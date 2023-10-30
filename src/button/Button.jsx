import styles from './Button.module.scss';
export const Button = ({ children, clickHandler, extraClasses, ...rest }) => {
    return (
        <button className={`${styles['btn']} ${extraClasses}`} onClick={clickHandler}>
            {children}
            {...rest}
        </button>
    );
};
