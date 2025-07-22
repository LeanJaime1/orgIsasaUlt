import React, { useEffect, useState } from "react";
import "./Stats.css";

const countersData = [
  { label: "Productores", count: 40 },
  { label: "Pólizas activas", count: 10000 },
  { label: "Asegurados tranquilos", count: 5000 },
];

const Stats = () => {
  const [counts, setCounts] = useState(countersData.map(() => 0));

  useEffect(() => {
    const duration = 2500;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        setCounts(
          countersData.map(({ count }) =>
            Math.min(Math.floor((progress / duration) * count), count)
          )
        );
        requestAnimationFrame(step);
      } else {
        setCounts(countersData.map(({ count }) => count));
      }
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-container">
        {countersData.map(({ label }, i) => (
          <div key={i} className="stats-box">
            <span className="stats-count">+{counts[i]}</span>
            <span className="stats-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
