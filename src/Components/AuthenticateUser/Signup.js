import React from 'react';
import './Signup.scss';
import LockOpenIcon from '@material-ui/icons/LockOpen';

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
    </div>
  );
};

export default Signup;
