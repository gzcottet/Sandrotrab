// Cards.tsx
import React from 'react';
import Button from './Button';
import "../styles/cards.css";  // Importando o CSS

const Cards = () => {
  return (
    <section id="pricing" className="container">
      <header>
        <p className="desktop-only">Planos e preços</p>
        <h2>Nossos planos</h2>
      </header>

      <section className="even-columns">
        {/* Cartão de Preço Básico */}
        <div className="pricing-card">
          <span className="plan">
            <h3>Básico</h3>
            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
          </span>
          <h2>Grátis</h2>
          <Button text="Pedir agora" secondary key="free" />
          <span className="hr" />
          <span className="features">
            <img src="/src/assets/check-icon.png" alt="ícone check" width={24} height={24} />
            <p>Retire na loja</p>
          </span>
          <ul className="features">
            <li>
              <img src="/src/assets/check-icon.png" alt="ícone check" width={24} height={24} />
              <p>Apenas 1 por CPF</p>
            </li>
          </ul>
        </div>

        {/* Cartão de Preço Premium */}
        <div className="pricing-card premium">
          <span className="bonus">
            <p>1º MÊS COM DESCONTO</p>
          </span>
          <span className="plan">
            <h3>Premium</h3>
            <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
          </span>
          <span className="price">
            <h2>R$ 89,90</h2>
            <p>/mês</p>
          </span>
          <Button text="Pedir agora" key="premium" />
          <span className="hr" />
          <span className="features">
            <img src="/src/assets/check-icon.png" alt="ícone check" width={24} height={24} />
            <p>2 Entregas</p>
          </span>
          <span className="features">
            <img src="/src/assets/check-icon.png" alt="ícone check" width={24} height={24} />
            <p>5 Refeições por semana</p>
          </span>
          <span className="features">
            <img src="/src/assets/check-icon.png" alt="ícone check" width={24} height={24} />
            <p>2 Sucos por semana</p>
          </span>
        </div>

        {/* Cartão de Preço "Combine com o motorista" */}
        <div className="pricing-card">
          <span className="plan">
            <h3>Combine com o motorista</h3>
            <p>Entre em contato diretamente com o motorista e combine o seu trajeto.</p>
          </span>
          <h2>-</h2>
          <Button text="Pedir agora" secondary key="driver" />
          <span className="hr" />
          <span className="features">
            <img src="/src/assets/check-icon.png" alt="ícone check" width={24} height={24} />
            <p>Converse com o motorista</p>
          </span>
          <span className="features">
            <img src="/src/assets/check-icon.png" alt="ícone check" width={24} height={24} />
            <p>Ajuste o trajeto</p>
          </span>
        </div>
      </section>
    </section>
  );
};

export default Cards;
