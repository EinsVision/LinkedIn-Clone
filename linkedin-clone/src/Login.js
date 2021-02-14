import React from 'react';
import './Login.css'

function Login() {
    const loginToApp = () => {

    };

    const register = () =>{};

    return (
        <div className='login'>
            <img src='http://t1.daumcdn.net/brunch/service/user/2Obj/image/yFVV4vS-laz3c3ShC_YpaEiat8A.png' alt='' />
            <form>
                <input placeholder='Full name (required if registering)' type='text'/>
                <input placeholder='Profile pic ULR (optional)' type='text'/>
                <input placeholder='Email' type='text'/>
                <input placeholder='Password' type='password'/>
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>
                Not a member?
                <span className='login__register' onClick={register}> Register Now</span>
            </p>
        </div>
    )
}

export default Login
