import {React,useState} from "react";
import {Grid,Typography,TextField,Button} from "@mui/material";
import copy from 'copy-to-clipboard';
import axios from "axios";

const Home = ()=>{
  const[hasSearched,setHasSearched] = useState(true);
  const[miniUrl,setMiniUrl] = useState("");
  const[longUrl,setLongUrl] = useState("");
  const handleChange = (event) => {
    setLongUrl(event.target.value);
  };
    const fetchData = async() => {
      console.log(longUrl);
      await axios.post("https://miniurl-api-five.vercel.app/createUrl",
      {
        url:longUrl
      }).then((data)=>{setMiniUrl(data.data)});
      setHasSearched(!hasSearched)
    }
    return(
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h3">MiniURL</Typography>
        {hasSearched ? (<Grid item container direction="column" justifyContent="center" alignItems="center">
       <Grid item sx={{paddingBottom:"10px"}}>
       <Typography> Enter a long URL to make a MiniURL</Typography>
       </Grid>
       <Grid item>
        <TextField id="outlined-basic" label="long Url" 
        variant="outlined" onChange={handleChange} sx={{width:"450px"}}/>
       </Grid>
       <Grid item sx={{paddingTop:"10px"}}>
       <Button variant="contained" onClick={()=>{fetchData()}}>
        Get mini-Url
        </Button>
       </Grid>
       </Grid> ):(<Grid item container direction="column" justifyContent="center" alignItems="center">
       <Grid item sx={{paddingBottom:"10px"}}>
       <Typography> Your long URL </Typography>
       </Grid>
       <Grid item>
        <TextField id="outlined-basic" label="long Url" variant="outlined" sx={{width:"450px"}}/>
       </Grid>
       <Grid item sx={{paddingBottom:"10px"}}>
       <Typography sx={{paddingTop:"10px"}}> MiniUrl </Typography>
       </Grid>
       <Grid item>
        <TextField id="outlined-basic" label="mini Url" variant="outlined" 
        value={miniUrl} sx={{width:"450px"}}/>
       </Grid>
       <Grid item container direction="row" justifyContent="center" alignItems="center">
       <Grid item sx={{paddingTop:"10px",marginRight:"10px"}}>
       <Button variant="contained" onClick={()=>{setHasSearched(!hasSearched)}}>
        New mini-Url
        </Button>
       </Grid>
       <Grid item sx={{paddingTop:"10px",marginRight:"10px"}}>
       <Button variant="contained" onClick={()=>{copy(miniUrl)}}>
        copy mini-Url
        </Button>
       </Grid>
       </Grid>
       </Grid> )}
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