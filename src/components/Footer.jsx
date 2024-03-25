import React from "react";
import { Link } from "react-router-dom";
import { IoLogoMedium } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdResetTv } from "react-icons/md";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="main-div">
      <div className="footer">
        <div id="suggest">
          <div className="suggest">
            <Link to="/" id="footer-link">
              <div className="router_icon">
                <h3>Cine zenith(the largest peak of cinemas)</h3>
              </div>
            </Link>

            <p>what do we suggest for you is.?</p>
            <Link to="/movies" id="footer-link">
              <div className="router_icon">
                <IoLogoMedium /> Movies
              </div>
            </Link>
            <Link to="/tv" id="footer-link">
              <div className="router_icon">
                <MdResetTv />
                TV Shows
              </div>
            </Link>
            <Link to="/people" id="footer-link">
              <div className="router_icon">
                <GoPeople /> Popular characters
              </div>
            </Link>
          </div>
          <div className="support">
            <p>you can contact via...?</p>
            <div className="info">
              <a href="mailto:jerryveeru1@gmail.com">jerryveeru1@gmail.com </a>
              <a href="callto:7702513376"> +91 7702513376</a>
            </div>
          </div>
        </div>
        <p className="fallow">you can fallow us on...</p>
        <div className="social-media">
          <Link
            className="social-media-icons"
            target="_blank"
            to="https://www.linkedin.com/in/veeresh-naik-22003127a/"
          >
            <FaLinkedin className="socialicon" />
          </Link>
          <Link
            className="social-media-icons"
            target="_blank"
            to="https://github.com/veereshnaik7/10kcoders-assignments"
          >
            <FaGithub className="socialicon" />
          </Link>
          <Link
            className="social-media-icons"
            target="_blank"
            to="https://www.instagram.com/veereshnaik__/?igshid=YTQwZjQ0NmI0OA%3D%3D"
          >
            <FaInstagramSquare className="socialicon" />
          </Link>
          <Link
            className="social-media-icons"
            target="_blank"
            to="https://www.facebook.com/veeresh.naik.5680"
          >
            <FaFacebook className="socialicon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
