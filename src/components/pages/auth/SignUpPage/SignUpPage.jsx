import React from 'react';
import styles from './SignUpPage.module.css';
import SignUpForm from '../../../forms/SignUpForm/SignUpForm';

const SignUpPage = () => {
    return <div className={styles.container}>
        <div className={styles.form}>
            <SignUpForm/>
        </div>
        <div className={styles.asideInfo}>
            <h2 className={styles.header}>Dummy Heading</h2>
            <p className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Odio reprehenderit ut expedita itaque veniam atque, doloribus dolores optio voluptatibus 
            animi consequuntur dicta ab excepturi eaque commodi, illum odit distinctio hic aliquam, 
            quos voluptates nulla nihil.</p>
        </div>
    </div>
}

export default SignUpPage;