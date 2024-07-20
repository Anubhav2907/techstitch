import React, { useState, useEffect } from "react";
import Line from "../../Images/line.svg";
import Calender from "../../Images/Calender.svg";
import Appointment from "../../Images/Appointment.svg";
import Enquiry from "../../Images/Enquiry.svg";
import Delivery from "../../Images/Delivery.svg";
import Expert from "../../Images/Expert.svg";

import HorizontalLine from "../../Images/horizontalLine.svg";

const FourthSection = () => {
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
      backgroundColor: "white",
      paddingBottom: "3em",
      paddingTop: "2em",
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
      width: "100%",
      paddingTop: "20px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      ...(isMobile ? { flexDirection: "column" } : { flexDirection: "row" }),
    },
    line: {
      ...(isMobile ? { transform: "rotate(90deg)" } : {}),
      paddingTop: "3.5em",
      paddingBottom: "3.5em",
      ...(isMobile ? { width: "90px" } : {}),
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
            <p style={styles.leftTopText}>OUR WORK PROCESS&nbsp;&nbsp;&nbsp;</p>
            <img src={Line} alt="line"></img>
          </div>
          <span style={styles.leftHeading}>How We Are Working</span>
          <span style={styles.leftText}>
            Get an idea about how we work and what will happen by the time
            you’ll raise an enquiry with us
          </span>
          <div style={styles.appointmentContainer}>
            <img src={Enquiry} alt="calender"></img>
            <img src={HorizontalLine} style={styles.line} alt="line"></img>
            <img src={Expert} alt="calender"></img>
            <img src={HorizontalLine} style={styles.line} alt="line"></img>
            <img src={Appointment} alt="calender"></img>
            <img src={HorizontalLine} style={styles.line} alt="line"></img>
            <img src={Delivery} alt="calender"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
