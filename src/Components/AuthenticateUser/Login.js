import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className='login'>
      <section className='wrapper'>
        <form>
          <h2>Login</h2>
          <div className='email'>
            <input type='email' placeholder='Email' />
          </div>
          <div className='password'>
            <input type='password' placeholder='Password' />
          </div>
          <div className='forgetPassword'>
            <p>Join free</p>
            <p>Forget Password?</p>
          </div>
          <div className='login'>
            <button type='submit'>Log In</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
