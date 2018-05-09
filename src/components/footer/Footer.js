import React from 'react';
import './Footer.css';

class Footer extends React.Component {

  render () {
    return (
      <div className="footer">
        <p>To discover more projects, check my</p>
        <a
          href="https://github.com/erwanriou/"
          target='_blank'
          rel="noopener noreferrer">GitHub</a>
      </div>
    )
  }
}

export default Footer;
