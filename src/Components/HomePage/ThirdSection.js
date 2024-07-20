import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Line from "../../Images/line.svg";

const ThirdSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 767;
  const styles = {
    containerStyle: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "100%",
      padding: "10px",
      boxSizing: "border-box",
      backgroundColor: "rgb(235, 246, 255)",
    },

    childStyle: {
      flex: 1,
      margin: "10px",
      padding: "20px",
      boxSizing: "border-box",
      textAlign: "center",
      ...(isMobile ? { width: "calc(100% - 20px)" } : {}),
    },
    middleContainer: {
      flex: 1,
      boxSizing: "border-box",
      ...(isMobile ? { width: "calc(100% - 20px)" } : {}),
    },
    containerLeft: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-evenly",
      height: "100%",
      textAlign: "left",
      paddingLeft: "2em",
      ...(isMobile ? { paddingLeft: "0em" } : {}),
    },
    leftTopText: {
      color: "#1698FF",
      fontSize: "1.4em",
      ...(isMobile ? { fontSize: "1.3em" } : {}),
    },
    leftHeading: {
      fontSize: "3.5em",
      lineHeight: "1.2",
      fontFamily: "Sans-Serif",
      width: "80%",
      ...(isMobile ? { width: "100%" } : {}),
      ...(isMobile ? { fontSize: "3em" } : {}),
    },
    rightSection: {
      textAlign: "left",
      paddingTop: "1em",
      ...(isMobile ? { textAlign: "center" } : {}),
      ...(isMobile ? { paddingTop: "2em" } : {}),
    },
    bluetick: {
      width: "30px",
    },
    rightSections: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      height: "100%",
      paddingLeft: "4em",
      ...(isMobile ? { padding: "0" } : {}),
    },
    rightHeading: {
      fontFamily: "Verdana",
      fontSize: "1.6em",
      fontWeight: "550",
      letterSpacing: "0.5px",
      marginBottom: "7px",
    },
    rightText: {
      color: "#6e6d6a",
    },
    leftText: {
      color: "#6e6d6a",
      width: "60%",
      ...(isMobile ? { width: "100%" } : {}),
      ...(isMobile ? { paddingTop: "10px" } : {}),
    },
  };
  return (
    <div style={styles.containerStyle}>
      <div style={styles.childStyle}>
        <div style={styles.containerLeft}>
          <div
            style={{
              justifyContent: "center",
              paddingBottom: "1em",
            }}
          >
            <p style={styles.leftTopText}>CCTV SOLUTIONS&nbsp;&nbsp;&nbsp;</p>
            <img src={Line} alt="line"></img>
          </div>
          <span style={styles.leftHeading}>
            Enabling Hassle-Free Customer Journey, Everyday
          </span>
          <span style={styles.leftText}>
            Get all types of security services, delivered to your doorstep. TPL
            moves with a motto of making your lives easier and secured with
            top-notch solutions.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
