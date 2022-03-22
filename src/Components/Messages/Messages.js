import React from 'react';
import './Messages.scss';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ForumIcon from '@material-ui/icons/Forum';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import CloseIcon from '@material-ui/icons/Close';

const Messages = () => {
  return (
    <>
      <div className='messages'>
        <header>
          <ul>
            <li className='listHeader'>
              <div className='conversation'>
                <ForumIcon />
                <p>All Conversations</p>
              </div>
            </li>
            <li className='listHeader'>
              <div className='unread'>
                <MailOutlineIcon />
                <p>Unread</p>
              </div>
            </li>
            <li className='listHeader'>
              <div className='favourite'>
                <StarOutlineIcon />
                <p>Favourites</p>
              </div>
            </li>
            <li className='listHeader'>
              <div className='ignored'>
                <RemoveCircleOutlineIcon />
                <p>Ignored</p>
              </div>
            </li>
          </ul>
          <CloseIcon className='close' />
        </header>
      </div>
    </>
  );
};

export default Messages;
