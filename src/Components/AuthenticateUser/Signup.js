import React, { useState, useEffect } from 'react';
import './Signup.scss';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { registerRoute } from '../Utilis/APIroutes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: '',
    name: '',
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
      navigate('/signup');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      //call apis
      const { name, email, password } = values;

      const { data } = await axios.post(registerRoute, {
        email,
        password,
        name,
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
    const { name, email, password } = values;
    if (name === '') {
      toast.error('Please enter name', toastOptions);
    } else if (email === '') {
      toast.error('Please enter email', toastOptions);
    } else if (password === '') {
      toast.error('Please enter password', toastOptions);
    } else if (password.length < 8) {
      toast.error(
        'Please enter a password more than 8 characters',
        toastOptions
      );
    }
    return true;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className='signup'>
      <header>
        <ul>
          <Link to='/signup' className='link'>
            <li>MyDatingAPP</li>
          </Link>
          <Link to='/login' className='link'>
            <li className='second'>
              <LockOpenIcon />
              LOG IN
            </li>
          </Link>
        </ul>
      </header>
      <section className='mainContent'>
        <article className='banner'>
          <div className='leftContainer'>
            <h1>
              Dating for successful men <br /> and ambitious women
            </h1>
            <p>Find a relationship on your own terms</p>
          </div>
          <div className='rightContainer'>
            <form onSubmit={(e) => handleSubmit(e)}>
              <h3>Join Free</h3>
              <div className='name'>
                <input
                  type='text'
                  placeholder='name'
                  name='name'
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className='email'>
                <input
                  type='email'
                  placeholder='E-mail'
                  name='email'
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className='passwork'>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className='join'>
                <button type='submit'>Join</button>
              </div>
            </form>
          </div>
        </article>
      </section>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Signup;
