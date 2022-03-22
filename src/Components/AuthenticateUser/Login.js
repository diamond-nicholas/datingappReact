/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginRoute } from '../Utilis/APIroutes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const toastOptions = {
    position: 'top-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  };

  useEffect(() => {
    if (localStorage.getItem('date-app-user')) {
      navigate('/login');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      //call apis
      const { email, password } = values;

      const { data } = await axios.post(loginRoute, {
        email,
        password,
      });

      if (data.status === false) {
        toast.error(data.message, toastOptions);
      }

      if (data.status === true) {
        localStorage.setItem('date-app-user', JSON.stringify(data.user));
        console.log(data.user);
        navigate('/search');
      }
    }
  };

  const handleValidation = () => {
    const { email, password } = values;
    if (email === '') {
      toast.error('Please enter a valid email', toastOptions);
      return false;
    } else if (!password) {
      toast.error('Please enter password', toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className='login'>
      <section className='wrapper'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Login</h2>
          <div className='email'>
            <input
              type='email'
              placeholder='Email'
              name='email'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='password'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              onChange={(e) => handleChange(e)}
            />
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
      <ToastContainer />
    </div>
  );
};

export default Login;
