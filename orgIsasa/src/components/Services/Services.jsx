import React from "react";
import { FaCar, FaMotorcycle, FaBicycle, FaHome, FaFire, FaBuilding, FaHardHat } from "react-icons/fa";
import "./Services.css";

const services = [
  { icon: <FaCar />, title: "Auto", desc: "Protección total para tu vehículo." },
  { icon: <FaMotorcycle />, title: "Motos", desc: "Cobertura completa para motocicletas." },
  { icon: <FaHome />, title: "Hogar", desc: "Cuidá tu casa y familia." },
  { icon: <FaFire />, title: "Incendio", desc: "Protección contra daños por fuego." },
  { icon: <FaBuilding />, title: "Integral de Comercio", desc: "Protección total para tu empresa y activos." },
  { icon: <FaHardHat />, title: "ART", desc: "Cobertura laboral para empresas." },
];

const Services = () => (
  <section id="servicios" className="services" data-aos="fade-up">
    <h2>¿Qué podés asegurar con nosotros?</h2>
    <div className="services-list">
      {services.map((s, i) => (
        <div key={i} className="service-item">
          <div className="service-icon">{s.icon}</div>
          <div className="service-text">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
