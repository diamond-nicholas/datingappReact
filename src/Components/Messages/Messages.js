import React from 'react';
import './Messages.scss';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ForumIcon from '@material-ui/icons/Forum';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

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
        <main className='main'>
          <section className='allChats'>
            <div className='searchUser'>
              <form>
                <input type='text' placeholder='Enter name' />
                <SearchIcon className='search' />
              </form>
            </div>
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
          </section>
          <div className='hr'></div>
          <section className='liveChats'>
            <div className='liveUser'></div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Messages;
