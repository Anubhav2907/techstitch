import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import cctv1 from "../../Images/cctv1.jpeg";
import cctv2 from "../../Images/cctv2.jpeg";
import cctv3 from "../../Images/cctv3.png";

const CardContainer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 767;

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "rgb(235, 246, 255)",
    padding: "2em",
    paddingTop: 0,
    boxSizing: "border-box",
  };
  const cardHeading = {
    fontSize: "1.8em",
    fontFamily: "Sans-Serif",
    paddingBottom: "15px",
    paddingTop: "6px",
  };
  const cardStyle = {
    backgroundColor: "white",
    boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    margin: "10px",
    boxSizing: "border-box",
    flex: isMobile ? "0 1 calc(100% - 40px)" : "0 1 calc(33.333% - 80px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "20px",
  };

  const imgStyle = {
    width: "85%",
    height: "auto",
    borderRadius: "20px",
    marginBottom: "10px",
    marginTop: "1em",
  };

  const textStyle = {
    marginBottom: "10px",
    textAlign: "center",
    maxWidth: "80%",
    margin: "auto",
  };
  const rightText = {
    color: "#6e6d6a",
    paddingBottom: "25px",
    ...(isMobile ? { paddingTop: "1em" } : {}),
  };
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img src={cctv1} alt="Card 1" style={imgStyle} />
        <div style={textStyle}>
          <h1 style={cardHeading}>CCTV for Households</h1>
          <p style={rightText}>
            Get your home secured and monitor activities even when you’re away
            from your family.
          </p>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={cctv2} alt="Card 2" style={imgStyle} />
        <div style={textStyle}>
          <h1 style={cardHeading}>CCTV for Workplace</h1>
          <p style={rightText}>
            Monitor the happenings and efficiency of your workplace even when
            you’re attending meetings.
          </p>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={cctv3} alt="Card 3" style={imgStyle} />
        <div style={textStyle}>
          <h1 style={cardHeading}>CCTV Maintenance</h1>
          <p style={rightText}>
            Get camera services at affordable cost, with trusted and verified
            partners only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
