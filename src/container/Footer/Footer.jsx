import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">487 72nd street Brookly, N.Y 11209</p>
        <p className="p__opensans">+1(718)333-5758</p>
        <p className="p__opensans">+1(917)216-2299</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&qoute:The Best Food On Earh Fresh Daily</p>
        <img
          src={images.spoon}
          alt="spoon_image"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon - Fri</p>
        <p className="p__opensans">8:00 am - 11:00 pm</p>
        <p className="p__opensans">Sat - Sun</p>
        <p className="p__opensans"> 11:00 am - 8:00 pm</p>
      </div>
    </div>
    <div className="app__footer__copyright">
      <p className="p__opensans">2022 Fresh Eats. All Rights reserved</p>
    </div>
  </div>
);

export default Footer;   
