import React from "react";
import "../styles/carrossel.css"; // CSS para o carrossel

const Carrossel = () => {
  return (
    <section className="carousel">
      <div className="carousel-content">
        <div className="carousel-card">
          <span className="testimony">
            <p>Excelente comida! Recomendo muito!</p>
          </span>
          <span className="rating">
            {/* Usando ícones de estrelas do FontAwesome */}
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i> {/* Ícone de estrela vazia */}
          </span>
          <span className="names">
            <p>Cliente 1</p>
            <p>CEO da Empresa X</p>
          </span>
        </div>

        {/* Pode adicionar mais cartões de depoimento aqui */}
      </div>
    </section>
  );
};

export default Carrossel;
