import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box,Snackbar} from "@mui/material";
import axios from 'axios';

const Mescontact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost/portfolio/messages.php', {
        name,
        email,
        message,
      });

      console.log(response.data);
      setName("");
      setEmail("");
      setMessage("");
      setOpenSnackbar(true);

    } 

   
catch (error) {
      console.error('Erreur lors de l\'envoi des données:', error);
    }
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h3" align="center" style={{ fontWeight: 'bold', fontFamily: 'sans-serif' }} mb={5}>
              Contactez Moi
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src="https://cdn.pixabay.com/photo/2017/10/10/21/46/laptop-2838917_1280.jpg"
                      alt="Contact"
                      style={{ maxWidth: "80%" }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                  />
                  <Button variant="contained" type="submit" sx={{ mt: 2, marginBottom: 5 }}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid> 
      </Grid>
          <Snackbar
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
        open={openSnackbar}
        autoHideDuration={5000} 
        onClose={handleCloseSnackbar}
        message=" Votre message a bien été envoyé!"
        sx={{ backgroundColor:'#32de84',marginBottom: '240px' }}
      />
    
   
    </Box>
    
  );
}

export default Mescontact;
