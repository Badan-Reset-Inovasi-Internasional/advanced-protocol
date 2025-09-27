import React, { useEffect } from "react";
import polytechnique from "../../assets/img/collaboration/UPHF_logo.png";
import telkom from "../../assets/img/collaboration/telkom.png";
import polban from "../../assets/img/collaboration/polban.png";
import trinologi from "../../assets/img/collaboration/universitas_trilogi.jpg";
import everynet from "../../assets/img/collaboration/everynet.png";
import itb from "../../assets/img/collaboration/logo_ITB.png";
import pu from "../../assets/img/collaboration/president_university.png";

function Partner() {
  useEffect(() => {
    const logoSlide = document.querySelector(
      ".scrolling-logos .logo-container .logo-slide"
    );

    if (logoSlide) {
      const clone = logoSlide.cloneNode(true);
      logoSlide.parentNode.appendChild(clone);
    } else {
      console.error("Element '.logo-slide' not found.");
    }
  }, []);

  return (
    <div className="scrolling-logos">
      <div className="logo-container">
        <div className="logo-slide">
          <img
            src={polytechnique}
            alt="Universite Polytechnique Hauts-de-France"
          />
          <img src={telkom} alt="Telkom" />
          <img src={polban} alt="Polban" />
          <img src={trinologi} alt="Universitas Trilogi" />
          <img src={everynet} alt="everynet" />
          <img src={itb} alt="itb" />
          <img src={pu} alt="president university" />
        </div>
      </div>
    </div>
  );
}

export default Partner;
