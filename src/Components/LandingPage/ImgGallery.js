import React from 'react';
import './ImgGallery.scss';

const ImgGallery = () => {
  const gallery = [
    {
      id: 1,
      name: 'ade',
      images: 'img2.jpg',
    },
    {
      id: 1,
      name: 'ade',
      images: 'img.jpg',
    },
    {
      id: 1,
      name: 'ade',
      images: 'img2.jpg',
    },
    {
      id: 1,
      name: 'ade',
      images: 'img.jpg',
    },
    {
      id: 1,
      name: 'ade',
      images: 'img2.jpg',
    },
    {
      id: 1,
      name: 'ade',
      images: 'img.jpg',
    },
    {
      id: 1,
      name: 'ade',
      images: 'img2.jpg',
    },
    {
      id: 1,
      name: 'ade',
      images: 'img.jpg',
    },
    {
      id: 1,
      name: 'ade',
      images: 'img2.jpg',
    },
  ];
  return (
    <div className='container'>
      <div className='row'>
        {gallery.map((data) => {
          return (
            <div className='col'>
              <div className='book'>
                <img src={data.images} alt='' />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImgGallery;
