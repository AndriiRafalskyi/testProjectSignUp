import React, { useState } from 'react';
import styles from './SignUpForm.module.css';
import { reduxForm, Field } from 'redux-form';
import Input from '../../core/input/Input';
import Select from '../../core/select/select';
import eye from '../../../assets/img/eye.svg';
import { required } from '../../../helpers/validators';

const SignUpForm = (props) => {
    const { handleSubmit, onSubmit, invalid, pristine } = props;

    const [isPasswordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(!isPasswordShown);
    }

    return <div className={styles.container}>
        <h1>Let's set up your account</h1>
        <p>Already have an account? <a href="#">Sign in</a></p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field validate={[required]} name={"name"} label={"Your name"} component={Input} type={'text'}/>
            <Field validate={[required]} name={"email"} label={"Email address"} component={Input} type={'email'}/>
            <Field name={"userType"} options={["User", "Developer", "Freelancer"]} component={Select} label={'I would describe my user type as'}/>
            <Field validate={[required]} name={"password"} label={"Password"} component={Input} 
            type={isPasswordShown ? 'text' : 'password'} icon={eye} onIconClicked={togglePasswordVisibility} additionalInfo={"Minimum 8 characters"}/>
            <button className={styles.nextButton} disabled={pristine || invalid}>Next</button>
            <p className={styles.tos}>By clicking the "Next" button, you agree to creating a free account, and to <a href="#tos">Terms of Service</a> and <a href="#policy">Privacy Policy</a></p>
        </form>
    </div>
}

export default reduxForm({
    form: 'signUpForm',
    enableReinitialize: true
})(SignUpForm);