import React from 'react';
import './SwipeButton.scss';
import ReplayIcon from '@material-ui/icons/Replay';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

const SwipeButton = () => {
  return (
    <div className='swipedButtons'>
      <IconButton className='swipeButtons__repeat'>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons__left'>
        <CloseIcon fontSize='large' />
      </IconButton>

      <IconButton className='swipeButtons__star'>
        <StarRateIcon fontSize='large' />
      </IconButton>

      <IconButton className='swipeButtons__right'>
        <FavoriteIcon fontSize='large' />
      </IconButton>

      <IconButton className='swipeButtons__lightening'>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  );
};

export default SwipeButton;
