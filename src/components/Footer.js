import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../static/Footer.css';

const Footer = () => {
  return (
    <div className="contact-icons">
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rodriguezyerson2005@gmail.com" className="icon email" aria-label="Email">
        <FaEnvelope />
      </a>
      <a href="https://github.com/YersonRodriguez2005" target="_blank" rel="noopener noreferrer" className="icon github" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/yerson-rodriguez/" target="_blank" rel="noopener noreferrer" className="icon linkedin" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://wa.me/573216393715" target="_blank" rel="noopener noreferrer" className="icon whatsapp" aria-label="WhatsApp">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Footer;
