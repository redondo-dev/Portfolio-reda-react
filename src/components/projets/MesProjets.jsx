import React from "react";
import "./projets.css";
import imagevoiture from "../../assets/toyota-car.jpg";
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

      <div className="projets">
        <div className="projet1">
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
                Un site pour un chauffeur VTC avec des réservations et des ...
              </Typography>
            </CardContent>

            <CardActions>
              <a
                href="URL_DE_VOTRE_SITE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir le site</Button>
              </a>
              <Button size="small">Voir plus ...</Button>
            </CardActions>
          </Card>
        </div>

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
                Cherchez le livre et l'édition en utilisant axios et l'API de Google Books.
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
              rel="noopener noreferrer">
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
                href="URL_DE_VOTRE_SITE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir le site</Button>
              </a>
              <a 
              href="https://" 
              target="_blank" 
              rel="noopener noreferrer">
                <Button size="small">Voir lien GitHub</Button> 
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
              rel="noopener noreferrer">
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
                E-commerce
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Site E-commerce 
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href="URL_DE_VOTRE_SITE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">Voir le site</Button>
              </a>
              <Button size="small">Voir plus ...</Button>
            </CardActions>
          </Card>
        </div>
      </div> 
    </>
  );
};

export default MesProjets;
