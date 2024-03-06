import React from "react";
import "./services.css";

const Services = () => {
  return (
    <>
      <h1>Mes Services </h1>
      <section className="services">
        <div id="work" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 wow bounce">
                <h2>Ce que je fais </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 col-xs-11 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="media">
                  <div className="media-object media-left">
                    <i className="fa fa-laptop" />
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">
                      Creation de sites web et mobiles Responsives
                    </h3>
                    <p>
                      On vous offre une expérience utilisateur optimale sur tous
                      les appareils avec nos créations de sites web entièrement
                      responsive, garantissant une navigation fluide et une
                      présentation impeccable, quel que soit l'écran
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-xs-11 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="media">
                  <div className="media-object media-left">
                    <i className="fa fa-link" />
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">HTML et CSS Templates</h3>
                    <p>
                      renforcer votre présence en ligne grâce à nos templates
                      HTML, CSS et ReactJS. Profitez de designs modernes et
                      professionnels pour créer facilement un site web à l'image
                      de votre activité
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-xs-11 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="media">
                  <div className="media-object media-left">
                    <i className="fa fa-paper-plane" />
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">UI &amp; site vitrine </h3>
                    <p>
                      Façonnez des expériences utilisateur exceptionnelles avec
                      notre approche et Transformez votre présence en ligne avec
                      la conception de sites vitrines, alliant esthétique et
                      convivialité pour présenter votre entreprise de manière
                      captivante et professionnelle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
