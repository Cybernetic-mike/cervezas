import React from "react";
import BannerImg from "../images/bannerCerveza.jpg";
import { Box } from "@mui/material";
import "animate.css";

function Banner() {
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <br />
      <br />
      <Box sx={{ display: "block", position: "relative" }}>
        <img className="img-dim" src={BannerImg} alt="Baner cerveza" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "0",
          fontSize: {
            sm: "8px",
            md: "15px",
            lg: "20px",
          },
          //transform: "translate(-50, -50)",
          textShadow: "2px 2px 5px black",
          textAlign: "center",
          color: "#ffb600",
        }}
      >
        <h1 className="animate__animated animate__fadeInUp">
          ANALISIS ESTADISTICO DE LA PRODUCION Y COMERCIALIZACION DE LA CERVEZA
          BOLIVIANA Y COMPARACION CON LA CERVEZA INTERNACIONAL
        </h1>
      </Box>
    </Box>
  );
}
export default Banner;
