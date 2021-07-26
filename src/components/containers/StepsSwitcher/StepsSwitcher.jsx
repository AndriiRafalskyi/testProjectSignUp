import React, { useState } from 'react';
import styles from './StepSwitcher.module.css';

const StepsSwitcher = (props) => {
    const { stepComponents } = props;

    const [ currentStep, setCurrentStep ] = useState(0);

    return <div>
        <p className={styles.stepSwitcher}>{`Step ${currentStep} of ${stepComponents.length}`}
        {Array(stepComponents.length).fill(null).map((_, index) => <span className={`${styles.bull} ${index === currentStep ? styles.active : ''}`} key={index}>&bull;</span>)}</p>
        {stepComponents[currentStep]({ onNext: () => setCurrentStep(currentStep + 1)})}
    </div>
}

export default StepsSwitcher;