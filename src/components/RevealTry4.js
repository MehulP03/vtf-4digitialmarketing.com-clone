import { Container } from '@mui/material'
import React from 'react'
import { Fade } from 'react-reveal'

function RevealTry4() {
    return (
        <Container
        maxWidth={"md"}
        sx={{
            marginTop:'40px',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "35px",
          textAlign:'center'
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
            We’ve been chosen by the best
          </span>
        </Fade>
        <hr style={{ border:'1px solid #808080', width:'100%' }} />
        <Fade bottom>
          <img
            src="https://www.digitalmarketing.com/wp-content/uploads/2018/01/DM-ClientLogos-01.png"
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
            DigitalMarketing.com advises many of the most successful and fastest growing companies in the world including Fortune 500 and Inc. Magazine’s 500/5000 Fastest Growing Companies.
          </span>
        </Fade>
      </Container>
    )
}

export default RevealTry4