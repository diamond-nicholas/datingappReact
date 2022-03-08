import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <section className='footer'>
      <article className='gridWrapper'>
        <div className='one'>
          <ul>
            <li className='title'>DOCUMENTS</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Website Rules</li>
          </ul>
        </div>
        <div className='two'>
          <ul>
            <li className='title'>INFO</li>
            <li>Payment Rules</li>
            <li>security</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className='three'>
          <ul>
            <li className='title'>SUPPORT</li>
            <li>About us</li>
            <li>Affiliate</li>
            <li>Help</li>
          </ul>
        </div>
        <div className='four'>
          <ul>
            <li className='title'>PAYMENT OPTIONS</li>
            <li>
              <img src='payment_opts.png' alt='' width='50' />
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Footer;
