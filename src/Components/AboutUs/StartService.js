import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
const StartService = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 767;
  const styles = {
    container: {
      margin: "0em 5em",
      marginBottom: "2em",
      backgroundColor: "#0063d3",
      borderRadius: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      fontFamily: "Sans-Serif",
      fontSize: "1.3em",
      textAlign: "center",
      letterSpacing: "0.3mm",
      ...(isMobile
        ? { marginTop: "0", margin: "3em 1em", fontSize: "1em" }
        : {}),
    },
    topcontainer: {
      padding: "5em 0",
      ...(isMobile ? { padding: "3em 0.5em" } : {}),
    },
    heading: {
      color: "white",
      paddingBottom: "0.3em",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.topcontainer}>
        <h1 style={styles.heading}>
          Initiate your journey to secure premises today
        </h1>
        <Button
          variant="contained"
          style={{
            marginTop: "20px",
            padding: "0.5em 2em",
            fontSize: "0.9em",
          }}
        >
          Contact Now
        </Button>
      </div>
    </div>
  );
};

export default StartService;
