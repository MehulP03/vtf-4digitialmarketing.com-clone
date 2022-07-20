import { Grid } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";

function RevealTry11() {
  return (
    <div>
      <Fade>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img
              src="https://www.digitalmarketing.com/wp-content/uploads/2017/09/Ferrari-square-1280-1000x1000.jpg"
              height="100%"
              width="100%"
              alt="Ferari"
            />
          </Grid>
          <Grid item xs={5} sx={{ backgroundColor:'#f0f0f0' }}>
            
          </Grid>
          <Grid item xs={1} sx={{backgroundColor:'#fff'}}>

          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}

export default RevealTry11;
