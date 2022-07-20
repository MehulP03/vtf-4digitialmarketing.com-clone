import { Container } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";

function RevealTry5() {
  return (
    <div style={{ backgroundColor: "#f8f8f8" }}>
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
            Precision-engineered for excellence in quality. Guaranteed.
          </span>
        </Fade>
        <br />
        <Fade bottom>
          <img
            src="https://www.digitalmarketing.com/wp-content/uploads/2018/01/DM-Images-00-PrecisionEngineering-Sat-Curves-02.jpg"
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
            Your journey with <b>DigitalMarketing.com</b> to “capture it all”
            starts with an unmatched quality guarantee with all solutions. It’s
            time for you to experience clear deliverables of excellence and
            quantifiable performance benchmarks all backed by full guarantees.
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
            Our commitment to digital greatness is stronger than ever.
          </span>
        </Fade>{" "}
      </Container>
    </div>
  );
}

export default RevealTry5;
