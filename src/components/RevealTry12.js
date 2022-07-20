import { Container } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function RevealTry12() {
  let CarPos = {
    data: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    dots:true,
    arrows:false
  };

  return (
    <div style={{ backgroundColor: "#DF002D" }}>
      <Container
        maxWidth={"md"}
        sx={{
          padding: "70px",
        }}
      >
        <Fade bottom>
          <Slider {...CarPos} style={{ padding:'30px', color:'#fff', textAlign:'center' }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "1rem",
              }}
            >
              <img
                src="/assets/quote.jpg"
                alt="Double Quote Circle"
                style={{ marginRight:'47%', marginLeft:'43%', height:"60px", width:"70px", padding:'20px' }}
              />
              We developed a great partnership with DigitalMarketing.com and
              their dedication to our goals is evident in all aspects of our
              marketing channels. We appreciate their attention to detail and
              creative approach to bringing our new product launches to life
              online.<br/><br/> FERRARI
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "1rem",
              }}
            >
              <img
                src="/assets/quote.jpg"
                alt="Double Quote Circle"
                style={{ marginRight:'47%', marginLeft:'43%', height:"60px", width:"70px", padding:'20px' }}
              />
              Our audience wants to receive the most relevant information right
              away in a format easily consumable for the decision-making
              process. DigitalMarketing.com expertise and "out of the box
              thinking" in helping us strategically deliver targeted content is
              a key value to improving our audience’s content journey.<br/><br/> KONICA
              MINOLTA
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "1rem",
              }}
            >
              <img
                src="/assets/quote.jpg"
                alt="Double Quote Circle"
                style={{ marginRight:'47%', marginLeft:'43%', height:"60px", width:"70px", padding:'20px' }}
              />
              AT&T chose DigitalMarketing.com after an extensive evaluation of a
              number of agencies in the market. We have not been disappointed
              with our choice. DigitalMarketing.com has been extremely
              beneficial to our ongoing strategies in helping us tailor our
              content and develop our online marketing programs to the level
              needed to exceed our sales objectives. They are continually
              looking for ways in which we can improve the return on our
              business development investment. I would highly recommend them to
              anyone.<br/><br/> AT&T INTERACTIVE
            </div>
          </Slider>
        </Fade>{" "}
      </Container>
    </div>
  );
}

export default RevealTry12;
