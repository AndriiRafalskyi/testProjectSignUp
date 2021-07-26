import React from 'react';
import styles from './StartSteps.module.css';
import SignUpPage from '../../pages/auth/SignUpPage/SignUpPage';
import StepsSwitcher from '../StepsSwitcher/StepsSwitcher';

const StartSteps = () => <div className={styles.container}>
    <div className={styles.signUpSteps}>
        <StepsSwitcher stepComponents={[
            (props) => <SignUpPage {...props}/>,
            () => <div>Second step</div>,
            () => <div>Third step</div>,
        ]}/>
    </div>
    <div className={styles.asideInfo}>
        <h2 className={styles.header}>Dummy Heading</h2>
        <p className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Odio reprehenderit ut expedita itaque veniam atque, doloribus dolores optio voluptatibus 
            animi consequuntur dicta ab excepturi eaque commodi, illum odit distinctio hic aliquam, 
            quos voluptates nulla nihil.</p>
    </div>
</div>;

export default StartSteps;