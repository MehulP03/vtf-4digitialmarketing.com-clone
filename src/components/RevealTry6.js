import { Container } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";

function RevealTry6() {
  return (
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
            width: "60%",
            paddingBottom: "20px",
            textAlign: "center",
          }}
        >
          Remarkable technology that remains unmatched.
        </span>
      </Fade>
      <br />
      <Fade bottom>
        <img
          src="https://www.digitalmarketing.com/wp-content/uploads/2018/01/DM-Images-01-RemarkableTechnology-Sat-Curves.jpg"
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
          A new generation of advanced technologies featuring Capture It All™ —
          exclusive only to DigitalMarketing.com — to outsmart and outgrow your
          competition.
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
          <b>Capture It All™</b> sorts from our treasure chest of accumulated
          data and then beta-tests innumerable website and search engine
          simulated outcomes to pinpoint the best possible plan of attack for
          your campaign.
        </span>
      </Fade>{" "}
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
          It means the power to provide unique strategies to greatly improve
          awareness. It also means more highly relevant traffic to capture more
          targeted opportunities than ever before.
        </span>
      </Fade>
    </Container>
  );
}

export default RevealTry6;
