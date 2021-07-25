import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
    const { label, input, type } = props;

    return <div>
        <input id={input.name} className={styles.input} {...input} placeholder={" "} type={type}/>
        <label for={input.name} className={styles.label}>{label} </label>
    </div>
}

export default Input;