import React from "react";
import Services from "../../Images/support4.png";

const FirstSection = () => {
  const styles = {
    container: {
      backgroundImage: `url(${Services})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "50vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      textAlign: "center",
      position: "relative",
    },
    content: {
      position: "relative",
      zIndex: 1,
    },
    heading: {
      fontSize: "4em",
      color: "#fff",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      margin: 0,
      padding: "0 20px",
    },
    mediaQueries: {
      "@media (max-width: 768px)": {
        heading: {
          fontSize: "3em",
        },
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>ABOUT US</h1>
      </div>
    </div>
  );
};

export default FirstSection;
