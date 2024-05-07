import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Om StädaFint AB</h1>
      <p className="about-intro">
        Grundat 2010, har StädaFint AB varit i framkant när det gäller att erbjuda enastående städtjänster till både privatpersoner och företagskunder över hela Sverige. Vårt engagemang för kvalitet, pålitlighet och kundnöjdhet sätter oss isär.
      </p>
      <div className="about-section">
        <h2>Vår Mission</h2>
        <p>Att leverera toppmoderna städ-lösningar som förbättrar din livs- och arbetsmiljö, och säkerställer en fläckfri miljö varje dag.</p>
      </div>
      <div className="about-section">
        <h2>Våra Värderingar</h2>
        <ul>
          <li className='about-list'>Integritet: Vi agerar med ärlighet och höga etiska standarder.</li>
          <li className='about-list'>Utmärkelse: Vi strävar efter perfektion i varje uppgift vi åtar oss.</li>
          <li className='about-list'>Innovation: Vi omfamnar nya idéer och teknologier för att förbättra våra tjänster.</li>
        </ul>
      </div>
      <div className="about-section">
        <h2>Varför Välja Oss?</h2>
        <p>Vi använder miljövänliga städprodukter, avancerad teknologi och har en utbildad, pålitlig personal. Med över ett decennium av erfarenhet garanterar vi nöjdhet i varje hörn av ditt utrymme.</p>
      </div>
    </div>
  );
};

export default About;
