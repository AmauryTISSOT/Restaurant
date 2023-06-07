import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Nous contacter :</h1>
        <p className="p__opensans">
          18 Rue Qui N'existe Pas - 75002 PARIS 2ème Arrondissement
        </p>
        <p className="p__opensans">+33 01.01.01.01.01</p>
        <p className="p__opensans">+33 06.06.06.06.06</p>
      </div>

      <div className="app__footer-links_logo">
        <p className="footer-name">GASTRO</p>
        <p className="p__opensans">
          &quot;C'est ici que l'on insert une situation qui ne veut rien
          dire.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          alt="cuillière"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horaires d'ouvetures</h1>
        <p className="p__opensans">Lundi-Vendredi:</p>
        <p className="p__opensans">18:30 - 22:30</p>
        <p className="p__opensans">Samedi-Dimanche:</p>
        <p className="p__opensans">18:30 - 23:30</p>
      </div>
    </div>

    <div className="footer__copyright">
      <div className="app__footer-links_icons github-container">
        <p className="p__opensans">Amaury Tissot</p>
        <a
          href="https://github.com/AmauryTISSOT/restaurant"
          target={"_blank"}
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
