import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Apropos from '../components/about/Apropos';
import MesProjets from "../components/projets/MesProjets";
import Mescontact from "../components/contact/Mescontact";
import MesCompetences from "../components/competences/MesComptences";
import MesServices from"../components/services/MesServices";

const Acceuil = () => {
  return (
    <>
      <Header />
      <br />
      <Apropos />
      <br />
      <MesCompetences/>
      <MesProjets/>
      <MesServices/>
      <Mescontact/>
      <Footer />
    </>
  );
};

export default Acceuil;
