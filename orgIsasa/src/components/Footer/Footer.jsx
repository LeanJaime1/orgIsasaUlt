import React from "react";
import "./Footer.css";
import logo from "../../assets/logo-fotter.png";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>
            <FaMapMarkerAlt className="footer-icon" /> Av. Belgrano 1217, P8 O83
          </p>
          <p>
            <FaPhone className="footer-icon" /> 1124600019
          </p>
          <p>
            <FaEnvelope className="footer-icon" /> organizacionisasa@gmail.com
          </p>



          <div className="footer-social">
            <a
              href="https://www.instagram.com/organizacionisasa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/organizacion-isasa-4438a6366//"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>




        </div>

        <div className="footer-right">

 {/* Mapa dentro del footer-container */}
        <div className="footer-map">
          <iframe
            title="Ubicación Oficina"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.968719291173!2d-58.37415378477537!3d-34.61315218046052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad07e343021%3A0x7e3403c7dd67e569!2sAv.%20Belgrano%201217%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1689472382762!5m2!1ses!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>




          
        </div>

       

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Organización ISASA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
