import React from 'react';
import './Signup.scss';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Footer from '../Footer/Footer';

const Signup = () => {
  return (
    <div className='signup'>
      <header>
        <ul>
          <li>MyDatingAPP</li>
          <li className='second'>
            <LockOpenIcon />
            LOG IN
          </li>
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
            <form>
              <h3>Join Free</h3>
              <div className='email'>
                <input type='email' placeholder='E-mail' />
              </div>
              <div className='passwork'>
                <input type='password' placeholder='Password' />
              </div>
              <div className='name'>
                <input type='text' placeholder='name' />
              </div>
              <div className='city'>
                <input type='text' placeholder='City' />
              </div>
              <div className='dob'>
                <input type='date' placeholder='Date of birth' />
              </div>
              <div className='gender'>
                <input type='text' placeholder='Gender' />
              </div>
              <div className='join'>
                <button type='submit'>Join</button>
              </div>
            </form>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
