import "../styles/solutions.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Solutions = () => {
  return (
    <section className="solutions container py-lg">
      <h2>Do melhor jeito para você!</h2>
      <p style={{ color: "#ffffff" }}>
        Viajens para o dia a dia colaborando com a natureza.
      </p>
      
      {/* Box de Pesquisa */}
      <div className="search-box">
        <input type="text" placeholder="Pesquisar motoristas próximos de mim" />
        <button className="search-btn">Pesquisar</button>
      </div>

      <div className="even-columns gap-1">
        <div className="card">
          <i className="fas fa-car" style={{ fontSize: '3rem', marginBottom: '10px' }}></i>
          <h3>Ofereça sua carona</h3>
          <p>
            Disponibilize seu veículo para compartilhar com colegas ou desconhecidos e economize nos seus trajetos diários.
          </p>
          <a className="btn" href="#">Saiba mais</a>
        </div>
        <div className="card">
          <i className="fas fa-users" style={{ fontSize: '3rem', marginBottom: '10px' }}></i>
          <h3>Pegue uma carona para o trabalho</h3>
          <p>
            Encontre motoristas que vão para o mesmo destino e otimize seu tempo, evitando trânsito e poluição.
          </p>
          <a className="btn" href="#">Saiba mais</a>
        </div>
        <div className="card">
          <i className="fas fa-calendar-alt" style={{ fontSize: '3rem', marginBottom: '10px' }}></i>
          <h3>Caronas para eventos</h3>
          <p>
            Organize caronas para eventos, facilitando o transporte para festas, shows e compromissos especiais, e aumentando a sustentabilidade.
          </p>
          <a className="btn" href="#">Saiba mais</a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
