import React, { useState, useEffect } from 'react';
import './Cards.scss';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import axios from 'axios';
import { getAllUsers } from '../Utilis/APIroutes';

const Cards = () => {
  const [users, setUsers] = useState([]);
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

  const getData = async () => {
    await axios({
      url: getAllUsers,
      method: 'GET',
    }).then((data) => setUsers(data.data.users));
  };

  useEffect(() => getData(), []);

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center align-items-center'>
        {users &&
          users.map(({ _id, name, image }) => {
            return (
              <>
                <div className='col-xs-12 col-sm-6 col-md-4 my-4' key={_id}>
                  <div className='card cardUser'>
                    <img
                      src={image ? image : 'humanPlaceholder.jpg'}
                      className='card-img-top'
                      alt=''
                    />
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
                          <p>{name},</p>
                          <p>20</p>
                          <p>
                            <FiberManualRecordIcon />
                          </p>
                        </div>
                        <div className='location'>Lagos</div>
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
