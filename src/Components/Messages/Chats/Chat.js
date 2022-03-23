import React from 'react';
import './Chat.scss';

const Chat = ({ own }) => {
  return (
    <div className={own ? 'chat own' : 'chat'}>
      <div className='chatTop'>
        <img src='img.jpg' alt='' className='chatImg' />
        <p className='chatText'>
          Hello this is a message Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
      <div className='chatButtom'>1 hour ago</div>
    </div>
  );
};

export default Chat;
