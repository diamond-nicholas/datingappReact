/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import './Conversations.scss';
import axios from 'axios';

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const resUser = await axios.get(
          'http://localhost:8001/api/v1/users/getOne/' + currentUser._id
        );
        setUser(resUser.data.user);
        const resFriend = await axios.get(
          'http://localhost:8001/api/v1/users/getOne/' + friendId
        );
        setFriend(resFriend.data.user);
        console.log(resUser.data.user, resFriend.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [conversation, currentUser]);
  return (
    <>
      <div className='userChats'>
        <div className='img'>
          <img
            alt=''
            src={friend && friend.image ? friend.image : 'humanPlaceholder.jpg'}
          />
        </div>
        <div className='user'>
          <p>{friend && friend.name}</p>
        </div>
        <div className='addToFavourites'>
          <StarOutlineIcon />
        </div>
      </div>
    </>
  );
};

export default Conversation;
