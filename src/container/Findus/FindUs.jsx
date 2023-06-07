import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Nous trouver
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          18 Rue qui n'existe pas - 75002 PARIS 2ème Arrondissement
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Horaires d'ouvertures
        </p>
        <p className="p__opensans">Lundi - Vendredi: 18:30 - 22:30</p>
        <p className="p__opensans">Samedi - Dimange: 18:30 - 23:30</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Nous rendre visite
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
