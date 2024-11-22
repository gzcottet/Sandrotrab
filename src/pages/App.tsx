import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Solutions from '../components/Solutions';
import Meio from '../components/Meio';
import Cards from '../components/Cards';
import NewsletterSubscription from '../components/NewsletterSubscription';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/solutions.css';
import Carrossel from '../components/carrossel'
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Meio />
      <Solutions />
      <Carrossel /> {/* Adiciona o componente Carrossel à renderização */}
      <Cards /> {/* Adiciona o componente Cards à renderização */}
      <NewsletterSubscription /> {/* Componente de cadastro de e-mail */}
    </>
  );
};

export default App;
