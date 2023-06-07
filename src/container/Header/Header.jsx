import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="A la recherche des nouvelles saveurs" />
      <h1 className="app__header-h1">Lorem ipsum dolor sit.</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
        laboriosam expedita quis consequatur distinctio saepe nihil rem officia
        aspernatur placeat dignissimos.
      </p>
      <button type="button" className="custom__button">
        Notre carte
      </button>
    </div>

    <div className="app__wrapper_img">
      <img className="header-img" src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
