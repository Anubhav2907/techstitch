import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Line from "../../Images/line.svg";

const SecondSection = () => {
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
      flexDirection: isMobile ? "column" : "row",
      flexWrap: "wrap",
      width: "100%",
      paddingTop: "4em",
      paddingBottom: "4em",
      boxSizing: "border-box",
    },
    childStyle: {
      flex: 1,
      margin: "10px",
      padding: "20px",
      paddingLeft: "0",
      boxSizing: "border-box",
      textAlign: "center",
      ...(isMobile ? { width: "calc(100% - 20px)" } : {}),
      ...(isMobile ? { padding: "0em" } : {}),
      ...(isMobile ? { paddingLeft: "1em" } : {}),
    },
    imgContainer: {
      margin: "10px",
      padding: "20px",
      width: "45%",
      boxSizing: "border-box",
      textAlign: "center",
      ...(isMobile ? { width: "calc(100% - 20px)" } : {}),
    },
    middleContainer: {
      flex: 1,
      boxSizing: "border-box",
      ...(isMobile ? { width: "calc(100% - 20px)" } : {}),
    },
    containerRight: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-evenly",
      height: "100%",
      textAlign: "left",
      paddingLeft: "0",
      width: "90%",
      ...(isMobile ? { padding: "0em" } : {}),
    },
    rightTopText: {
      color: "#1698FF",
      fontSize: "1.4em",
      ...(isMobile ? { fontSize: "1.3em" } : {}),
    },
    rightHeading: {
      fontSize: "3.5em",
      lineHeight: "1.2",
      fontFamily: "Sans-Serif",
      width: "80%",
      ...(isMobile ? { width: "100%" } : {}),
      ...(isMobile ? { fontSize: "3em" } : {}),
    },
    rightText: {
      color: "#6e6d6a",
      ...(isMobile ? { paddingTop: "1em" } : {}),
    },
  };
  return (
    <div style={styles.containerStyle}>
      <div style={styles.imgContainer}>
        <img
          style={{ width: "70%", borderRadius: "20px" }}
          src="https://www.get-licensed.co.uk/get-daily/wp-content/uploads/2021/06/england.png"
          alt={"Mechanic"}
        />
      </div>
      <div style={styles.childStyle}>
        <div style={styles.containerRight}>
          <div
            style={{
              justifyContent: "center",
              paddingBottom: "1em",
            }}
          >
            <p style={styles.rightTopText}>
              CUSTOMER DELIVERY EXCELLENCE &nbsp;&nbsp;&nbsp;
            </p>
            <img src={Line} alt="line"></img>
          </div>
          <span style={styles.rightHeading}>Your Security is Our Priority</span>
          <span style={styles.rightText}>
            Started in 2020, TPL is known for delivering impeccable security
            solutions to all types of household and industrial challenges.
            Offering prompt installations, quick maintenance, and a hassle-free
            customer experience.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
