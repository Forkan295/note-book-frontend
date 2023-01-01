import React from 'react';
import { useSelector } from 'react-redux'
import ProfileDropDown from './profileDropDown';
import LoginButton from './loginButton';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const LoginOrProfile = () => {
    const isLogin = useSelector((state) => {
        return state.login.value
      })

    return (
        <div className='ml-5'>
            {isLogin ? <ProfileDropDown classNames={classNames} /> : <LoginButton />}
        </div>
    );
}

export default LoginOrProfile;
