import { Container } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";

function RevealTry13() {
  return (
    <Container
      maxWidth={"md"}
      sx={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "35px",
        textAlign: "center",
      }}
    >
      <Fade bottom>
        <span
          style={{
            color: "#000",
            fontWeight: 800,
            fontSize: "38px",
            lineHeight: "45px",
            width: "90%",
            paddingBottom: "20px",
            textAlign: "center",
          }}
        >
          Certified and Accredited
        </span>
      </Fade>
      <hr style={{ border: "1px solid #808080", width: "100%" }} />
      <Fade bottom>
        <img
          src="https://www.digitalmarketing.com/wp-content/uploads/2018/01/DM-Partners-1.png"
          alt="secondimage"
          width="100%"
          height="100%"
        />
      </Fade>
      <br />
      <Fade bottom>
        <span
          style={{
            color: "#000",
            fontWeight: 400,
            fontSize: "1.5rem",
            paddingTop: 20,
            paddingBottom: 25,
            width: "95%",
          }}
        >
          DigitalMarketing is a Google AdWords Certified Partner, Microsoft®
          Bing Partner, and a SEMPO® Circle Member.
        </span>
      </Fade>
    </Container>
  );
}

export default RevealTry13;
