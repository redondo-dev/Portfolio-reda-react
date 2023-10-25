import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import './error.css';

const Error404 = () => {
  return (
    <Box className="error-container">
      <Container className="error-content">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" className="error-title">
              Oups .....
            </Typography>
            <Typography variant="h3" className="error-message">
              La page que vous cherchez n'existe pas ou vous avez fait une erreur dans l'url
            </Typography>
            <div className="error-button-container">
            <Button
              className="error-button"
              variant="contained"
              component={Link}
              to="/acceuil"
            >
              Retour à l'acceuil
            </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt="error404"
              className="error-image"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Error404;
