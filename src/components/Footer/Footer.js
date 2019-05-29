import React from 'react';
import './Footer.css';


const Footer = () => {

  return (
    <div>
      <footer className="footer is-primary">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>This right here is a spiffy footer, where tou can add stuff.</p>
            </div>
            <div className="column has-text-right">
              <a href="#" className="icon">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-twitter-square"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
