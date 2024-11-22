// HeroSection.tsx
import React from 'react';
import '../styles/heroSection.css';
import '../styles/solutions.css'; // Para o componente Solutions

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content text-center">
        <h1>Seja bem-vindo ao Juntaí</h1>
        <p>Caronas para o dia a dia do seu jeito para facilitar a vida</p>
        <div className="btn-wrapper flex gap-1 justify-center">
          <a href="#" className="btn">Conheça a nossa empresa</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
