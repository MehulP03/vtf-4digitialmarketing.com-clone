import { Container } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";

function RevealTry10() {
  return (
    <div style={{ backgroundColor: "#f8f8f8" }}>
      <Container
        maxWidth={"md"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "35px",
          marginTop:'30px'
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
              textAlign: "center",
            }}
          >
            Client retention rates
higher than ever
          </span>
        </Fade>
        <br />
        <Fade bottom>
          <img
            src="https://www.digitalmarketing.com/wp-content/uploads/2018/01/DM-Images-03-ClientRetention-02-Sat.jpg"
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
            Our time-tested track record of client successes is driven from within. It starts with a team comprised of industry veterans and thought leaders ready to serve you white-glove style — not novices. In fact, our experts have on average been on board nearly a decade.
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
            Unsurprisingly, because our key players consider us home, so do our clients. We boast the highest client retention rate in the industry for our digital marketing services.
          </span>
        </Fade>{" "}
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
            Combine that with exclusive technologies and performance guarantees, and the result is a long-term relationship that builds. And more evidence to prove we know how to grow businesses.
          </span>
        </Fade>{" "}
      </Container>
    </div>
  );
}

export default RevealTry10;
