import { Container, Grid } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";

function RevealTry9() {
  return (
    <Container sx={{ marginTop:'50px' }}>
      <Fade>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img
              src="https://www.digitalmarketing.com/wp-content/uploads/2015/07/inc-5000.png"
              height={80}
              width={270}
              alt="INC"
            />
          </Grid>
          <Grid item xs={6}>
            <span
              style={{
                color: "#000",
                fontWeight: 300,
                fontSize: "1rem",
                padding: 2,
                paddingBottom: 15,
                width: "95%",
              }}
            >
              It means the power to provide unique strategies to greatly improve
              awareness. It also means more highly relevant traffic to capture
              more targeted opportunities than ever before.
            </span>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
}

export default RevealTry9;
