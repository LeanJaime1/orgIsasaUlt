import React from "react";
import "./Hero.css";
import banner from "../../assets/banner.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero"
      data-aos="fade"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="hero-text-container">
        <h1>Impulsá tu carrera</h1>
        <p>
          Sumate a nuestra red de productores profesionales y accedé a un
          acompañamiento personalizado, capacitación constante y acceso exclusivo
          a las principales compañías de seguros. Potenciá tu cartera, optimizá
          tus ventas y crecé con el respaldo de un equipo comprometido con tu
          éxito.
        </p>
        <a href="#contacto" className="cta">Trabajá con nosotros</a>
      </div>
    </section>
  );
};

export default Hero;
