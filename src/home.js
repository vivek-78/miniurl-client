import React from "react";
import {Grid,Typography} from "@mui/material";
import {Logo} from "./images";
import HomePageInputs from "./components/HomePageInputs";

const Home = ()=>{
    return(
      <Grid container direction="row" justifyContent="space-around" alignItems="center">
        <Grid item lg={4} xs={12}>
        <img src={Logo} alt="error" height={500} width={500} />
        </Grid>
        <Grid item lg={5} xs={12}>
         <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start" spacing={0}>
         <Grid item xs={12}>
        <Typography gutterBottom sx={{color:"white",fontWeight:"500",marginBottom:"0px",fontSize:"50px"}}>
          Miniurl
        </Typography>
        </Grid>
        <Grid item xs={12}>
         <Typography gutterBottom sx={{color:"white",marginBottom:"50px",fontSize:"25px"}}>
         create a mini url for your long url
        </Typography>
        </Grid>
        <HomePageInputs />
         </Grid> 
        </Grid>
      </Grid>
    )
}

export default Home;

/*
        <Grid item>
        <Typography variant="h2" gutterBottom sx={{color:"white"}}>
          MiniUrl
        </Typography>
        </Grid>
        <Grid item>
         <Typography variant="h4" gutterBottom sx={{color:"white"}}>
         create a mini url for your long url
        </Typography>
        </Grid>
        <Grid item>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
*/