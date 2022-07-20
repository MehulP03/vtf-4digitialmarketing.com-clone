import React from "react";
import Fade from "react-reveal/Fade";

function RevealTry1() {
  return (
    <div style={{ textAlign:'center', marginTop: "100px", backgroundColor:'#000', paddingTop:'40px' }}>
      <Fade bottom>
        <div>
          <span
            style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: "3em",
            }}
          >
            See a 63-78% increase in sales.
          </span>
        </div>
        <div>
          <img
            src="/assets/Landing.jpg"
            alt="Landing"
            width="100%"
            height="600vh"
          />
        </div>
      </Fade>
    </div>
  );
}

export default RevealTry1;
