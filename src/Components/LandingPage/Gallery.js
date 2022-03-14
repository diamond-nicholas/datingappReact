import React from 'react';
import ImgGallery from './ImgGallery';

const Gallery = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='gallery'>
            <ImgGallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
