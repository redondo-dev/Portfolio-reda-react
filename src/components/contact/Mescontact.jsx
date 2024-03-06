
import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box, Snackbar } from "@mui/material";
import emailjs from 'emailjs-com';
import './contact.css'

const Mescontact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send('service_1rokvym', 'template_6vwlgf8', {
        name,
        email,
        message,
      }, '_hDDVl4VbYFe5LdKV');

      setName("");
      setEmail("");
      setMessage("");
      setOpenSnackbar(true);

    } catch (error) {
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
    <>
    <h1>Contactez Moi</h1> 
    <Box className="box" sx={{ height: "100vh" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h1" align="center" style={{color:'black', fontWeight: 'bold', fontFamily: 'sans-serif' }} mt={8}>
            
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
                    required= "le nom est obligatoire"
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required="email obligatoire"
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    margin="normal"
                    required='message obligatoire '
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
        message=" 🙂,Votre message a bien été envoyé et sera traité dans les plus brefs delais !"
        sx={{ backgroundColor: '#32de84', marginBottom: '240px' }}
      />
    </Box>
    </>
  );
}

export default Mescontact;
