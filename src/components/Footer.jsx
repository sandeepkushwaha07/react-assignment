
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        <hr/>
        <div className="row">
          <div className="col-lg-6">
            <p id="footerHeading">&copy; 2024 Your Sandeep Movies Card.</p>
          </div>
          <div className="col-lg-6">
            <div className="icon">
             <a href='https://www.facebook.com/profile.php?id=100010991323090'><FontAwesomeIcon icon={faFacebook} /></a> 
             <FontAwesomeIcon icon={faWhatsapp} />
             <a href='https://www.instagram.com/sandeep_02ku?utm_source=qr&igsh=MWNvOHhzcHdrNTdtdA=='> <FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
