import React from 'react';
import styles from './SignUpPage.module.css';
import SignUpForm from '../../../forms/SignUpForm/SignUpForm';

const SignUpPage = (props) => {
    const onSubmit = (values) => {
        props.onNext();
    }

    console.log(props);

    return <div className={styles.container}>
        <div className={styles.form}>
            <SignUpForm onSubmit={onSubmit}/>
        </div>
    </div>
}

export default SignUpPage;