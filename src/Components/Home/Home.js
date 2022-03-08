import React from 'react';
import './Home.scss';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PeopleIcon from '@material-ui/icons/People';
import Footer from '../Footer/Footer';

const Home = () => {
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
              MyDatingAPP is a safe <br /> and comfortable place to find your
              love
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

        <article className='advantages'>
          <div className='header'>
            <h3>Advantages of MyDatingAPP</h3>
            <p>
              MyDatingAPP is a communication platform, which offers a
              comfortable and safe environment for men and women to find the
              love of their life. Guided by the interests of our users, we
              guarantee the following:
            </p>
          </div>
          <div className='wrapper'>
            <div className='container'>
              <div className='cards'>
                <img
                  src='https://emilydates.com/webassets/img/png/icons/index-audience.png'
                  alt=''
                />
                <h3>An expanding audience</h3>
                <p>
                  Everyday thousands of new women and men add their profiles,
                  hoping to find a genuine partner.
                </p>
              </div>
              <div className='cards'>
                <img
                  src='	https://emilydates.com/webassets/img/png/icons/index-heart.png'
                  alt=''
                />
                <h3>Convenience</h3>
                <p>
                  Our portal is extremely easy to use. New users will
                  effortlessly master its features.
                </p>
              </div>
              <div className='cards'>
                <img
                  src='	https://emilydates.com/webassets/img/png/icons/index-smile.png'
                  alt=''
                />
                <h3>Support</h3>
                <p>
                  If you ever have any questions or difficulties, we are there
                  to help you at your convenience.
                </p>
              </div>
            </div>
          </div>

          <div className='border'>
            <button type='submit'>JOIN FREE</button>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
