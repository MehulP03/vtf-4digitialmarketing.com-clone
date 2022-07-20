import { Container } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";

function RevealTry3() {
  return (
    <div style={{backgroundColor:'#f8f8f8'}}>
      <Container
        maxWidth={"md"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "35px",
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
            Your outsourced digital marketing A-Team to “Capture It All.”
          </span>
        </Fade>
        <br />
        <Fade bottom>
          <img
            src="https://www.digitalmarketing.com/wp-content/uploads/2018/01/DM-1920x1200.png"
            alt="secondimage"
            height={513}
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
            Meet <b>DigitalMarketing.com</b>. We believe no opportunity should
            be left on the table. Our vision has been to serve as a powerful
            extension of your own marketing department, with no overhead or
            long-term contract, managed by our team of experts delivering you
            digital greatness.
          </span>
        </Fade>
        <br />
        <Fade bottom>
          <span
            style={{
              color: "#000",
              fontWeight: 400,
              fontSize: "1.5rem",
              padding: 2,
              paddingBottom: 15,
              width: "95%",
            }}
          >
            That vision has become a reality. It’s why more senior leaders of
            mid-size firms choose <b>DigitalMarketing.com</b> as their
            outsourced strategic marketing team for unprecedented power to grow
            and capture all available opportunities for leads and sales.
          </span>
        </Fade>{" "}
        <br />
        <Fade bottom>
          <span
            style={{
              display: "flex",
              textAlign: "center",
              color: "#000",
              fontWeight: 400,
              fontSize: "1.5rem",
              padding: 2,
              paddingBottom: 15,
            }}
          >
            CEOs love us. And CMOs love us. So will you.
          </span>
        </Fade>
      </Container>
    </div>
  );
}

export default RevealTry3;
