import "../App.css";
import { AppBar, Container, Box, Toolbar } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <AppBar component="nav" sx={{ backgroundColor:'#000' }}>
      <Container maxWidth={"xl"} style={{
            display: "flex",
            justifyContent: "flex-end",
            padding:'9px',
            backgroundColor: "#000",
            color: "#ffffff",
          }}>
        <span>
          US 1-800-299-3736
        </span>
      </Container>
      <Container maxWidth={"xl"} sx={{ backgroundColor:'transparent' , paddingleft:'20px', paddingRight:'20px' }}>
        <Box xs={{ flexGrow: 1 }}>
          <Toolbar>
            <Box sx={{ display: { flexGrow: 1 } }}>
              <a href="/">
                <img
                  src="https://www.digitalmarketing.com/wp-content/uploads/2018/04/Digital-Marketing-Logo-Symbol-only-07e-Cropped-BG-with-text-transparent-ENLARGED-TEXT-200pxH-WithColorRED-3.png"
                  alt="logo"
                  height={80}
                  width={518}
                />
              </a>
            </Box>

            <Box sx={{ textAlign: "right" }}>
              <a href="/" className="Navbar-link">
                METHODOLOGY
              </a>
              <a href="/" className="Navbar-link">
                SOLUTIONS
              </a>
              <a href="/" className="Navbar-link">
                SERVICES
              </a>
              <a href="/" className="Navbar-link">
                ABOUT US
              </a>
              <a href="/" className="Navbar-link">
                CAREERS
              </a>
              <a href="/" className="Navbar-link">
                CONTACT
              </a>
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navbar;
