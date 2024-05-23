import React from "react";
import { Tilt } from "react-tilt";
import { FaDesktop, FaServer, FaCodeBranch } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { motion } from "framer-motion";
import "./competence.css";

const MesCompetences = () => {
  return (
    <>
      <h1>Mes Competences </h1>
      <div className="competences">
        <div className="competence-card">
          <Tilt className="tilt-card" options={{ max: 30 }}>
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
              }}
              style={{
                borderRadius: "2rem",
                borderBlockColor: "black",
                background: "linear-gradient(to bottom, #224C98, black)",
                color: "white",
                width: "300px",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "20px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="inner-card">
                <FaDesktop className="icon" />
                <h3> Front-end</h3>
                <p> HTML5,CSS3,JavaScript,ES6 </p>
                <p> Bootstrap, MUI </p>
                <p>
                  {" "}
                  React-js,React hooks et Redux toolkit , React Native et Next
                  Js en cours d'apprentissage{" "}
                </p>
              </div>
            </motion.div>
          </Tilt>
        </div>
        <br />
        <div className="competence-card">
          <Tilt className="tilt" options={{ max: 30 }}>
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
              }}
              style={{
                borderRadius: "2rem",
                borderBlockColor: "black",
                background: "linear-gradient(to bottom, #1a1f71 ,black)",
                color: "white",
                width: "300px",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                // marginBottom: "20px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="inner-card">
                <FaServer className="icon" />
                <h3> Back-end</h3>
                <p> Php, Sql, php myadmin</p>
                <p> Encours d'apprentissage Node.js, Express, MongoDB</p>
                {/* <p> Sécurité de l'authentification avec JWT</p>
              <p> Automatisation des tests d'API avec Postman</p> */}
              </div>
            </motion.div>
          </Tilt>
        </div>
        <br />
        <div className="competence-card">
          <Tilt className="tilt-card" options={{ max: 30 }}>
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
              }}
              style={{
                borderRadius: "2rem",
                borderBlockColor: "black",
                backgroundColor: "lightblue",
                background: "linear-gradient(to bottom, #2E5090, black)",
                color: "white",
                width: "300px",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "20px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="inner-card">
                <FaCodeBranch className="icon" />
                <h3> Gestion de version</h3>
                <p> Git</p>
                <p>Github</p>
                <p>.</p>
              </div>
            </motion.div>
          </Tilt>
        </div>
        <br />
        <div className="competence-card">
          <Tilt className="tilt" options={{ max: 30 }}>
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
              }}
              style={{
                borderRadius: "2rem",
                borderBlockColor: "black",
                background: "linear-gradient(to bottom, #1a1f71 ,black)",
                color: "white",
                width: "300px",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                // marginBottom: "20px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="inner-card">
                <SiPostman className="icon" />
                <h3> Securité et Test </h3>
                <p> Sécurité de l'authentification avec JWT</p>
                <p> Automatisation des tests d'API avec Postman</p>
              </div>
            </motion.div>
          </Tilt>
        </div>
        <br />
      </div>
    </>
  );
};

export default MesCompetences;
