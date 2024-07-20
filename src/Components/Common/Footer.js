import { useEffect, useState } from "react";
import Logo from "../../Images/LogoMain.svg";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TnC from "./TnC";
import Privacy from "./Privacy";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openTnc, setOpenTnc] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleOpenTnc = async () => {
    setOpenTnc(true);
  };
  const handleCloseTnC = () => setOpenTnc(false);

  const handleOpenPrivacy = async () => {
    setOpenPrivacy(true);
  };
  const handleClosePrivacy = () => setOpenPrivacy(false);

  const isMobile = windowWidth <= 767;
  const styles = {
    container: {
      display: "flex",
      padding: "4em 5em",
      borderRadius: "50px",
      justifyContent: "space-between",
      alignItems: "center",
      ...(isMobile
        ? {
            paddingTop: "3em",
            paddingBottom: "1em",
            paddingLeft: "1em",
            paddingRight: "1em",
          }
        : {}),
    },
    leftContainer: {
      width: "60%",
    },
    rightContainer: {
      width: "40%",
      alignItems: "center",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      ...(isMobile
        ? { display: "flex", flexDirection: "column", alignItems: "flex-start" }
        : {}),
    },
    logoName: {
      fontFamily: "Sans-Serif",
      letterSpacing: "0.2mm",
      fontSize: "1.8em",
      fontWeight: "550",
      paddingLeft: "0em",
      ...(isMobile ? { fontSize: "1.4em" } : {}),
    },
    footerOptions: {
      paddingTop: "1.5em",
      paddingRight: "1em",
      fontSize: "1.2em",
      display: "flex",
      flexDirection: "row",
      ...(isMobile ? { flexDirection: "column", fontSize: "1em" } : {}),

      // justifyContent: "space-between",
    },

    popup: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "80%",
      bgcolor: "background.paper",
      boxShadow: 24,
      borderRadius: "20px",
      height: "90%",
      overflow: "auto",
      // textAlign: "center",
      p: 4,
      ...(isMobile ? { maxWidth: "95%" } : {}),
    },
    option: {
      paddingRight: "2em",
    },
    input: {
      width: "60%",
      marginRight: "5px",
      ...(isMobile ? { marginBottom: "20px" } : {}),
      ...(isMobile ? { width: "100%" } : {}),
    },
    formContainer: {
      display: "flex",
      flexDirection: "row",
      ...(isMobile ? { flexDirection: "column" } : {}),
    },
    paragraphText: {
      paddingBottom: "10px",
      fontSize: "1.2em",
      ...(isMobile ? { fontSize: "1em" } : {}),
    },
    rightInside: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
    },
    bottomContainer: {
      padding: " 2em 5em",
      display: "flex",
      justifyContent: "space-between",
      ...(isMobile
        ? { padding: "1em", flexDirection: "column", alignItems: "center" }
        : {}),
    },
    policy: {
      display: "flex",
      flexDirection: "row",
    },
    policyLink: {
      cursor: "pointer",
      fontSize: "1.2em",
      ...(isMobile ? { fontSize: "1em" } : {}),
    },
    copyright: {
      fontSize: "1.2em",
      ...(isMobile ? { paddingTop: "1em", fontSize: "1em" } : {}),
    },
  };
  return (
    <div
      style={{
        backgroundColor: "rgb(235, 246, 255)",
        borderRadius: "70px 70px 0 0 ",
      }}
    >
      <div style={styles.container}>
        <div style={styles.leftContainer}>
          <div style={styles.logoContainer}>
            <img
              src={Logo}
              style={{ height: "90px", cursor: "pointer" }}
              alt="logo"
            ></img>
            <h3 style={styles.logoName}>TECHSTITCH</h3>
          </div>
          <div style={styles.footerOptions}>
            Techstitch Pvt. Ltd., leading the way, highly trusted <br />
            and reliable security and surveillance partner since 2020.
          </div>
        </div>
        <div style={styles.rightContainer}>
          <div style={styles.rightInside}>
            <p style={styles.paragraphText}>Get the freshest news from us</p>
            <div style={styles.formContainer}>
              <TextField
                id="2"
                label="Your Email Address..."
                style={styles.input}
                variant="outlined"
                size="small"
                sx={{ border: "0" }}
              />
              <Button variant="contained">SUBSCRIBE</Button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1.5px solid #bfdbf7 ",
        }}
      ></div>
      <div style={styles.bottomContainer}>
        <div>
          <div style={styles.policy}>
            <a style={styles.policyLink} onClick={handleOpenTnc}>
              Terms & Conditions &nbsp; |&nbsp; &nbsp;
            </a>
            <a style={styles.policyLink} onClick={handleOpenPrivacy}>
              &nbsp;Privacy Policy
            </a>
          </div>
        </div>
        <div style={styles.copyright}>
          <p> © Techstitch 2024. All Rights Reserved</p>
        </div>
      </div>
      <Modal
        open={openTnc}
        onClose={handleCloseTnC}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.popup}>
          <TnC />
        </Box>
      </Modal>
      <Modal
        open={openPrivacy}
        onClose={handleClosePrivacy}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.popup}>
          <Privacy />
        </Box>
      </Modal>
    </div>
  );
};

export default Footer;
