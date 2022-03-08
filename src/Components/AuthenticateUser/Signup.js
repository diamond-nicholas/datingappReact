import React from 'react';
import './Signup.scss';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PeopleIcon from '@material-ui/icons/People';

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
      <section className='footer'>
        <article className='gridWrapper'>
          <div className='one'>
            <ul>
              <li className='title'>DOCUMENTS</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Website Rules</li>
            </ul>
          </div>
          <div className='two'>
            <ul>
              <li className='title'>INFO</li>
              <li>Payment Rules</li>
              <li>security</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className='three'>
            <ul>
              <li className='title'>SUPPORT</li>
              <li>About us</li>
              <li>Affiliate</li>
              <li>Help</li>
            </ul>
          </div>
          <div className='four'>
            <ul>
              <li className='title'>PAYMENT OPTIONS</li>
              <li>
                <img src='payment_opts.png' alt='' width='50' />
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Signup;
