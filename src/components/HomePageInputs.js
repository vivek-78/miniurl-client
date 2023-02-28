import {React,useState} from "react";
import {Grid,Button,TextField} from "@mui/material";
import axios from "axios";
const HomePageInputs = ()=>{
    const [hasSearched,setHasSearched] = useState(true);
    const createMiniUrl = ()=>{
     axios.post("http://localhost:9000")
     setHasSearched(true)
    }
    return(
     <Grid item container>
        {hasSearched == false ?
       (<>
       <Grid item xs={12} lg={7}>
       <TextField id="outlined-basic" label="LongUrl" variant="outlined" sx={{width:"320px"}}/>
                </Grid>
                <Grid item xs={12} lg={5}>
                        <Button variant="contained"
                            onClick={() => { createMiniUrl() } }
                            sx={{
                                height: "48px",
                                borderRadius: "8px",
                                backgroundColor: "#36839B"
                            }}
                        >
                            create miniurl
                        </Button>
                    </Grid>
                    </>):(
                   <>
                   <Grid item xs={12}>
                   <TextField id="outlined-basic" label="LongUrl" variant="outlined" sx={{marginBottom:"15px",width:"300px"}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="MiniUrl" variant="outlined" sx={{marginBottom:"20px",width:"300px",color:"red"}}/>
                    </Grid>
                    <Grid item container direction="row" justifyContent="flex-start" alignItems="center">
                    <Grid item xs={12} lg={3}>
                        <Button variant="contained"
                            onClick={() => { alert("hi"); } }
                            sx={{
                                height: "48px",
                                borderRadius: "8px",
                                backgroundColor: "#36839B",
                                marginBottom:"15px"
                            }}
                        >
                            copy miniurl
                        </Button>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Button variant="contained"
                            onClick={() => { setHasSearched(false) } }
                            sx={{
                                height: "48px",
                                borderRadius: "8px",
                                backgroundColor: "#36839B",
                                marginBottom:"15px"
                            }}
                        >
                            create miniurl
                        </Button>
                    </Grid>
                    </Grid>
                    </>
        )}
     </Grid>
    )
}

export default HomePageInputs