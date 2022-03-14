import React from 'react';
import './Filter.scss';
import TuneIcon from '@material-ui/icons/Tune';

const Filter = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='left'>
            <div className='wrapper'>
              <div className='all'>All</div>
              <div className='vline'></div>
              <div className='new'>New</div>
              <div className='vline'></div>
              <div className='online'>Online</div>
            </div>
          </div>
          <div className='right'>
            <div className='filter'>
              <TuneIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
