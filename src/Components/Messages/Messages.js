/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Messages.scss';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ForumIcon from '@material-ui/icons/Forum';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import Conversation from './Conversation';
import Chat from './Chats/Chat';
import axios from 'axios';
import { getConversationRoute } from '../Utilis/APIroutes';

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const user = JSON.parse(localStorage.getItem('date-app-user'));

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8001/api/v1/conversation/' + user._id
        );
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user._id]);
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
          <Link to='/search'>
            <CloseIcon className='close' />
          </Link>
        </header>
        <main className='main'>
          <section className='allChats'>
            <div className='searchUser'>
              <input type='text' placeholder='Enter name' />
              <SearchIcon className='search' />
            </div>

            {conversations.map((converse) => (
              <Conversation conversatio={converse} />
            ))}
          </section>
          <div className='hr'></div>
          <section className='liveChats'>
            <div className='liveUser'>
              <div className='chatBoxTop'>
                <Chat />
                <Chat own={true} />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
              </div>
              <div className='chatBoxBottom'>
                <textarea
                  className='chatMessageInput'
                  placeholder='Type a message'
                ></textarea>
                <button className='chatSubmitBtn'>Send</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Messages;
