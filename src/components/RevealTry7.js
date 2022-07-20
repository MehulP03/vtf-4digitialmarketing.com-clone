import { Container, Grid } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";

function RevealTry7() {
  return (
    <div
      style={{ color: "#fff", backgroundColor: "#fff", textAlign: "center" }}
    >
      <Container maxWidth={"lg"} sx={{ pt: 15, pb: 15 }}>
        <Fade bottom>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Fade bottom>
                <span
                  style={{
                    color: "#000",
                    fontWeight: 800,
                    fontSize: "40px",
                    textAlign: "center",
                  }}
                >
                  When your objective is to scale your firm by outsourcing or
                  leading digital marketing or SEO
                </span>
              </Fade>
              <br />
              <br />
              <Fade bottom>
                <span
                  style={{
                    color: "#000",
                    textAlign: "left",
                    fontWeight: 400,
                    fontSize: "24px",
                  }}
                >
                  DigitalMarketing.com has driven over 2.3 billion dollars of
                  revenue for for our clients since 2003, using our unique
                  Capture It All™. To learn how we can help you to attain your
                  objectives:
                </span>
              </Fade>

              <Fade bottom>
                <span
                  style={{
                    color: "#000",
                    textAlign: "left",
                    fontWeight: 400,
                    fontSize: "18px",
                  }}
                >
                  <ul>
                    <li>
                      Explore our Methodology section to discover on unique
                      process to help you achieve your goals.
                    </li>

                    <li>
                      Study our Client reviews area to see what clients like you
                      have experience first hand our results.
                    </li>
                    <li>
                      {" "}
                      Discover our Solutions to learn the ways we can deliver
                      for you.
                    </li>
                    <li>
                      {" "}
                      Secure a Free site analysis with one of our acclaimed
                      digital marketing thought leader.
                    </li>
                  </ul>
                </span>
              </Fade>
            </Grid>
            <Grid item xs={4}>
              <Container>
                <Fade bottom>
                  <span
                    style={{
                      color: "#000",
                      fontWeight: 800,
                      fontSize: "18px",
                      height: 93,
                      width: 637,
                    }}
                  >
                    WE ARE HEADLINED IN GLOBAL MEDIA OUTLETS
                  </span>
                </Fade>
                <br />
                <Fade bottom>
                  <span
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      color: "#000",
                      fontWeight: 400,
                      fontSize: "18px",
                      height: 93,
                      width: 637,
                    }}
                  >
                    Global media outlets headline DigitalMarketing.com’s experts
                    in breaking news and opinion articles.
                  </span>
                </Fade>
                <br/>
                <br/>

                <Grid container sx={{backgroundColor: '#f2f2f2', padding:'10px'}}>
                  <Grid item xs={6}>
                    <a href="/">
                      <img
                        src="https://www.digitalmarketing.com/wp-content/uploads/2018/03/DM-News-Images-CNBC.png"
                        alt="cnbc"
                        height={104}
                        width={130}
                      />
                    </a>
                  </Grid>
                  <Grid item xs={6}>
                  <a href="/">
                      <img
                        src="https://www.digitalmarketing.com/wp-content/uploads/2018/03/DM-News-Images-FOXBusiness.png"
                        alt="foxbussiness"
                        height={104}
                        width={130}
                      />
                    </a>
                  </Grid>
                  <Grid item xs={6}>
                    <a href="/">
                      <img
                        src="https://www.digitalmarketing.com/wp-content/uploads/2018/03/DM-News-Images-TheStreet.png"
                        alt="TheStreet"
                        height={104}
                        width={130}
                      />
                    </a>
                  </Grid>
                  <Grid item xs={6}>
                  <a href="/">
                      <img
                        src="https://www.digitalmarketing.com/wp-content/uploads/2018/03/DM-News-Images-GovtTech.png"
                        alt="govtTech"
                        height={104}
                        width={130}
                      />
                    </a>
                  </Grid>
                  <Grid item xs={6}>
                    <a href="/">
                      <img
                        src="https://www.digitalmarketing.com/wp-content/uploads/2018/03/DM-News-Images-IBD.png"
                        alt="IDB"
                        height={104}
                        width={130}
                      />
                    </a>
                  </Grid>
                  <Grid item xs={6}>
                  <a href="/">
                      <img
                        src="https://www.digitalmarketing.com/wp-content/uploads/2018/03/DM-News-Images-Observer.png"
                        alt="observer"
                        height={104}
                        width={130}
                      />
                    </a>
                  </Grid>
                  <Grid item xs={6}>
                    <a href="/">
                      <img
                        src="https://www.digitalmarketing.com/wp-content/uploads/2018/03/DM-News-Images-Philly.png"
                        alt="philly"
                        height={104}
                        width={130}
                      />
                    </a>
                  </Grid>
                  <Grid item xs={6}>
                  <a href="/">
                      <img
                        src="https://www.digitalmarketing.com/wp-content/uploads/2018/04/DM-News-Images-CNN.png"
                        alt="CNN" 
                        height={104}
                        width={130}
                      />
                    </a>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </div>
  );
}

export default RevealTry7;
