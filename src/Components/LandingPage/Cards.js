import React from 'react';
import './Cards.scss';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Cards = () => {
  const PropsArray = [
    {
      id: 1,
      images: 'img.jpg',
      name: 'diamond',
      age: 45,
      location: 'Lagos, Nigeria',
    },
    {
      id: 2,
      images: 'img2.jpg',
      name: 'isreal',
      age: 77,
      location: 'Lagos, Nigeria',
    },
    {
      id: 2,
      images: 'img2.jpg',
      name: 'isreal',
      age: 77,
      location: 'Lagos, Nigeria',
    },
    {
      id: 2,
      images: 'img2.jpg',
      name: 'isreal',
      age: 77,
      location: 'Lagos, Nigeria',
    },
  ];

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center align-items-center'>
        {PropsArray.map((data) => {
          return (
            <>
              <div className='col-xs-12 col-sm-6 col-md-4 my-4'>
                <div className='card cardUser'>
                  <img src={data.images} className='card-img-top' alt='' />
                  <div className='card-body'>
                    <div className='widget'>
                      <div className='emontions'>
                        <InsertEmoticonIcon />
                      </div>
                      <div className='star'>
                        <StarBorderIcon />
                      </div>
                      <div className='message'>
                        <MailOutlineIcon />
                      </div>
                    </div>
                    <div className='userData'>
                      <div className='name'>
                        <p>{data.name},</p>
                        <p>{data.age}</p>
                        <p>
                          <FiberManualRecordIcon />
                        </p>
                      </div>
                      <div className='location'>{data.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
