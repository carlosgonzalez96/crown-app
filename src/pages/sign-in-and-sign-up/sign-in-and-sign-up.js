import React from 'react';

import SignIn from '../../components/sign-in/signInComponent';
import SignUp from '../../components/signUp/signUpComponent';

import './sign-in-and-sign-up-styles.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;