
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        <hr/>
        <div className="row">
          <div className="col-md-6">
            <p id="footerHeading">&copy; 2024 Your Sandeep Movies Card.</p>
          </div>
          <div className="col-md-6">
            <div className="icon">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faWhatsapp} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
