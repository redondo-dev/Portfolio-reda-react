import React from "react";
import monImage from "../../assets/reda.jpg";
import "./Apropos.css";
const Apropos = () => {
  return (
    <section className="acceuil">
      <div className="profil">
        <h1 className="portfolio">Portfolio Fethi Reda RIAD</h1>
        <img className="photo-profil" src={monImage} alt=" riad reda" />
        <h2 className="portfolio"> Salut je suis RIAD reda fethi    Developpeur web et web mobile</h2>
        
      </div>
      <h1 className="portfolio">A Propos de Moi</h1>
      <p className="aboutMe">
        "Passionné par le développement web et mobile, en tant que développeur débutant/junior, après avoir passé 8 mois à l'AFPA et acquis des compétences essentielles en plus de mes expériences autodidactes, j'ai développé une bonne connaissance des langages tels que HTML, CSS, JavaScript. J'ai également commencé à explorer des cadres et bibliothèques populaires, tels que React.js.
        Côté back-end, j'ai travaillé avec PHP, SQL et PHPMyAdmin, et j'ai récemment entamé mon parcours avec Node.js en utilisant le framework Express et MongoDB. Mon objectif ultime est de devenir un développeur full-stack spécialisé dans les technologies JavaScript."
      </p>
    </section>
  );
};

export default Apropos;
