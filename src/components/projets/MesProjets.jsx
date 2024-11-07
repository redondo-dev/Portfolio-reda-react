import React from "react";
import "./projets.css";
import imagevoiture from "../../assets/toyota-car.jpg";
import imageredondo from "../../assets/redondo.jpg";
import ImageApp from "../../assets/meteoApp.png";
import bestoffootball from"../../assets/bestoffoot.png"
import cabinetMedical from "../../assets/cabinetMedical.jpg"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MesProjets = () => {
  return (
    <>
      <h1>Mes Projets</h1>

      <section className="projets">
        <div className="projet2">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              src="https://cdn.pixabay.com/photo/2017/07/02/09/03/books-2463779_1280.jpg"
              alt="librairie"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Projet librairie
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cherchez le livre et l'édition en utilisant axios et l'API de
                Google Books.
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href="https://redabook-d6ee6.firebaseapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir le site</Button>
              </a>
              <a
                href="https://github.com/redondo-dev/Ebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir lien GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>

        <div className="projet3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              src="https://cdn.pixabay.com/photo/2017/02/23/21/35/cinema-2093264_1280.jpg"
              alt="api cinema"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                API cinéma
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Interface pour chercher des films en utilisant l'API de films.
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href="https://cinema-reda-riad.firebaseapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">voir le site </Button>
              </a>
              <a
                href="https://github.com/redondo-dev/apifilmreda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir le lien Github </Button>
              </a>
            </CardActions>
          </Card>
        </div>

        <div className="projet5">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              src="https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_1280.jpg"
              alt="TodoList"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Todo-List
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Todolist
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href="https://todolist-react-223ba.firebaseapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir le site</Button>
              </a>

              <a
                href="https://github.com/redondo-dev/TodoList-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir lien GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
        <div className="projet4">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              src="https://cdn.pixabay.com/photo/2015/09/09/20/33/basketball-933173_1280.jpg"
              alt="api nba"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                API NBA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Interface de classement de le conf-est NBA
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href="https://nba-conference-est-standing.firebaseapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir le site</Button>
              </a>
              <a
                href="https://github.com/redondo-dev/ApiNba"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir lien GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
        <div className="projet6">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              src="https://cdn.pixabay.com/photo/2019/09/30/15/23/online-shopping-4516043_640.jpg"
              alt="e-commerce"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Panier pour E-commerce
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Panier avec react bootstrap et une fake api e-commerce
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href="https://panier-e-commerce-en-react.firebaseapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir le site</Button>
              </a>
              <a
                href="https://github.com/redondo-dev/cart-e-commerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir lien GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
        <div className="projet7">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              src={imagevoiture}
              alt="AMVTC"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Site pour chauffeur VTC
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Un site pour un chauffeur VTC Marseillais en React-js
              </Typography>
            </CardContent>

            <CardActions>
              <a
                href="https://amvtc13.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir le site</Button>
              </a>
              <a
                href="https://github.com/redondo-dev/mariaVTC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir lien GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
        <div className="projet8">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              src={imageredondo}
              alt="blog foot"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Blog Foot Italien
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Un blog pour amateur de foot italien en Node js,Express et
                MongoDb et reactJs en front
              </Typography>
            </CardContent>

            <CardActions>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button size="small">
                  le site est en cours de finalisation
                </Button>
              </a>
              <a
                href="https://github.com/redondo-dev/blog-calcio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir lien GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>

        <div className="projet9">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              src={ImageApp}
              alt="MeteoApp"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Meteo application avec React Native{" "}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cherchez la Meteo ave OpenWeatherAPi
              </Typography>
            </CardContent>
            <CardActions>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button size="small">Voir le site</Button>
              </a>
              <a
                href="https://github.com/redondo-dev/MeteoApp-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir lien GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>

        <div className="projet10">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              src={bestoffootball}
              alt="football-best-of"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                 application football avec next-js{" "}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                meilleurs footballeurs de l'histoire
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://bestl0-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button size="small">Voir le site</Button>
              </a>
              <a
                href="https://github.com/redondo-dev/best10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir lien GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
        <div className="projet11">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              src={cabinetMedical}
              alt="cabinet medical"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                cabinet medical avec next-js{" "}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                site pour cabinet medical specialisé en esthetique
              </Typography>
            </CardContent>
            <CardActions>
              <a href="https://cabinet-medical-gray.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button size="small">Voir le site</Button>
              </a>
              <a
                href="https://github.com/redondo-dev/cabinetMedical"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir lien GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>

        
      </section>
    </>
  );
};

export default MesProjets;
