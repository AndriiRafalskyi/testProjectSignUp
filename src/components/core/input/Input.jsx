import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
    const { label, input, type, icon, onIconClicked, meta: { touched, error }, additionalInfo } = props;

    return <div className={`${styles.container} ${touched && error ? styles.errorContainer : '' }`}>
            <input id={input.name} className={styles.input} {...input} placeholder={" "} type={type}/>
            <label htmlFor={input.name} className={styles.label}>
                <span className={styles.text}>{label}</span>
                {icon && <img onClick={onIconClicked} className={styles.icon} src={icon} alt={"Input icon"}/>}
            </label>
            {touched && error && <span className={styles.error}>
                {error}
            </span>
            }
            {additionalInfo && <span className={styles.additionalInfo}>{additionalInfo}</span>}
    </div>
}

export default Input;