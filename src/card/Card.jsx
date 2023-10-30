import style from './Card.module.scss';

export const Card = ({ extraClasses, children }) => {
    return (
        <div className={`${style['card']} ${extraClasses}`}>
            {children}
        </div >
    );
};
