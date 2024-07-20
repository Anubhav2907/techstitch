import React, { useState, useEffect } from "react";
import Line from "../../Images/line.svg";
import Report from "../../Images/report.svg";

const FifthSection = () => {
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
    leftText: {
      color: "#6e6d6a",
      width: "60%",
      paddingTop: "20px",
      paddingBottom: "10px",
      ...(isMobile ? { width: "100%" } : {}),
      ...(isMobile ? { paddingTop: "10px" } : {}),
    },
    appointmentContainer: {
      width: "90%",
      paddingTop: "20px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      ...(isMobile ? { flexDirection: "column" } : { flexDirection: "row" }),
    },
    line: {
      ...(isMobile ? { transform: "rotate(90deg)" } : {}),
      paddingTop: "3.5em",
      paddingBottom: "3.5em",
      ...(isMobile ? { width: "90px" } : {}),
    },
    topContainer: {
      display: "flex",
      flexDirection: "row",
      ...(isMobile ? { flexDirection: "column" } : { flexDirection: "row" }),
      ...(isMobile ? { textAlign: "center" } : {}),
    },
    reportContainer: {
      paddingLeft: "1em",
      ...(isMobile ? { paddingTop: "1em" } : {}),
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
            <p style={styles.leftTopText}>
              BUILDING CREDIBILITY WITH NUMBERS&nbsp;&nbsp;&nbsp;
            </p>
            <img src={Line} alt="line"></img>
          </div>
          <span style={styles.leftHeading}>What We Have Done</span>
          <span style={styles.leftText}>
            Milestones and podiums achieved in the last couple of years - with
            impeccable services and solutions to every kind of problems and
            challenges.
          </span>
          <div style={styles.appointmentContainer}>
            <div style={styles.topContainer}>
              <img src={Report} alt="Report"></img>
              <div style={styles.reportContainer}>
                <h1>7000+</h1>
                <span>Installations Done</span>
              </div>
            </div>
            <div style={styles.topContainer}>
              <img src={Report} alt="Report"></img>
              <div style={styles.reportContainer}>
                <h1>4+ Years</h1>
                <span>In the field</span>
              </div>
            </div>
            <div style={styles.topContainer}>
              <img src={Report} alt="Report"></img>
              <div style={styles.reportContainer}>
                <h1>15</h1>
                <span>Cities Presence</span>
              </div>
            </div>
            <div style={styles.topContainer}>
              <img src={Report} alt="Report"></img>
              <div style={styles.reportContainer}>
                <h1>120+</h1>
                <span>Major Outlets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
