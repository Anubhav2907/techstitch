import React, { useEffect, useState } from "react";
const TnC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 767;
  const styles = {
    container: {
      padding: "4em 5em",
      paddingTop: "0",
      ...(isMobile ? { paddingTop: "0", padding: "3em 1em" } : {}),
    },
  };
  return (
    <div style={styles.container}>
      <h3 style={{ fontFamily: "Sans-Serif" }}>
        Terms & Condition <subscript>*</subscript>
      </h3>
      <ul style={{ paddingLeft: "1em" }}>
        <li style={{ color: "#717572", paddingTop: "0.7em" }}>
          Support requests are subject to review and prioritization based on
          urgency and available resources.
        </li>
        <li style={{ color: "#717572", paddingTop: "0.7em" }}>
          Response times may vary depending on the complexity of the issue and
          current support volume.
        </li>
        <li style={{ color: "#717572", paddingTop: "0.7em" }}>
          Users agree to provide accurate and complete information when
          submitting support tickets.
        </li>
        <li style={{ color: "#717572", paddingTop: "0.7em" }}>
          Techstitch reserves the right to modify or discontinue support
          services with appropriate notice to users.
        </li>
      </ul>
    </div>
  );
};

export default TnC;
