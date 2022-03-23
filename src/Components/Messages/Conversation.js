import React from 'react';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import './Conversations.scss';

const Conversation = () => {
  return (
    <>
      <div className='userChats'>
        <div className='img'>
          <img src='img.jpg' alt='' />
        </div>
        <div className='user'>
          <p>Name, 25</p>
        </div>
        <div className='addToFavourites'>
          <StarOutlineIcon />
        </div>
      </div>
    </>
  );
};

export default Conversation;
