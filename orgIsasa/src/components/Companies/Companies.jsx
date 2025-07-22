import React from "react";
import Slider from "react-slick";
import "./Companies.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sancorLogo from "../../assets/companies/sancor.png";
import atmLogo from "../../assets/companies/atm.png";
import beneficioLogo from "../../assets/companies/beneficio.png";
import equidadLogo from "../../assets/companies/equidad.png";
import holandoLogo from "../../assets/companies/holando.png";
import profsegurosLogo from "../../assets/companies/profseguros.png";
import rusLogo from "../../assets/companies/rus.png";

const logos = [
  sancorLogo,
  atmLogo,
  beneficioLogo,
  equidadLogo,
  holandoLogo,
  profsegurosLogo,
  rusLogo,
];

const Companies = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 4000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section id="empresas" className="companies" data-aos="fade-up">
      <Slider {...settings}>
        {logos.map((logo, i) => (
          <div key={i} className="logo-slide">
            <img src={logo} alt={`Logo ${i + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Companies;
