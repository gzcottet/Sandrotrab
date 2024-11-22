import '../styles/navbar.css';
import logo from '../assets/logo.svg';

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo da empresa" className="logo-img" />
      </div>
      <nav>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#solutions">Soluções</a></li>
          <li><a href="#testimonials">Depoimentos</a></li>
          <li><a href="#pricing">Preços</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
      <div className="auth-links">
        <a className="btn" href="#">Login</a>
        <a className="btn" href="#">Cadastre-se</a>
      </div>
    </header>
  );
};

export default Navbar;
