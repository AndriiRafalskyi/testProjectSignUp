import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../core/input/Input';

const SignUpForm = () => {
    return <div>
        <h1>Let's set up your account</h1>
        <p>Already have an account? <a href="#">Sign in</a></p>
        <form>
            <Field name={"name"} label={"Your name"} component={Input} type={'text'}/>
            <Field name={"email"} label={"Email address"} component={Input} type={'email'}/>
            <Field name={"password"} label={"Password"} component={Input} type={'password'}/>
        </form>
    </div>
}

export default reduxForm({
    form: 'signUpForm',
    enableReinitialize: true
})(SignUpForm);