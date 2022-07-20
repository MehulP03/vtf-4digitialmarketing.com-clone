import { Container } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";

function RevealTry8() {
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
            Exclusive research for an insider’s edge.
          </span>
        </Fade>
        <br />
        <Fade bottom>
          <img
            src="https://www.digitalmarketing.com/wp-content/uploads/2018/01/DM-Images-02-ExclusiveResearch-Sat-Curves-02.jpg"
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
            Our commitment to exclusive research culled from thousands of
            digital marketing campaigns is unprecedented. Since inception, we’ve
            completed 35 research projects to prove out new strategies and drive
            more effective results for our clients.
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
            For us, it means identifying and acting on important insights and
            trends. For you, it means a massive advantage over others stuck in a
            one-size-fits-all, cookie-cutter methodology.
          </span>
        </Fade>{" "}
      </Container>
    </div>
  );
}

export default RevealTry8;
