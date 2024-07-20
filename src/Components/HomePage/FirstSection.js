import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import Mechanic from "../../Images/mechanic.svg";
import BlueTick from "../../Images/blueTick.svg";
import Line from "../../Images/line.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Utils/firebaseConfig";
import CircularProgress from "@mui/material/CircularProgress";

const FirstSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [requirementsError, setRequirementsError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const validateFields = () => {
    let isValid = true;
    if (!name) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }
    if (!email) {
      setEmailError(true);
      isValid = false;
    } else {
      if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
        setEmailError(false);
      } else {
        setEmailError(true);
        isValid = false;
      }
    }
    if (!requirements) {
      setRequirementsError(true);
      isValid = false;
    } else {
      setRequirementsError(false);
    }
    if (!message) {
      setMessageError(true);
      isValid = false;
    } else {
      setMessageError(false);
    }
    return isValid;
  };
  const handleOpen = async () => {
    setOpen(true);
  };
  const handleClose = () => {
    setName("");
    setEmail("");
    setRequirements("");
    setMessage("");
    setOpen(false);
  };
  const handleOpen2 = async () => {
    if (!validateFields()) return;
    setLoading(true);
    await setDoc(doc(db, "requirements", uuidv4()), {
      name: name,
      email: email,
      requirements: requirements,
      message: message,
    });
    setLoading(false);
    handleClose();
    setOpen2(true);
  };
  const handleClose2 = () => setOpen2(false);
  const isMobile = windowWidth <= 767;
  const styles = {
    containerStyle: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
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
    },
    popup: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      boxShadow: 24,
      borderRadius: "20px",
      textAlign: "center",
      p: 4,
      ...(isMobile ? { maxWidth: "95%" } : {}),
    },
    inputContainer2: {
      marginTop: "0.5em",
    },
    input: {
      width: "100%",
      marginTop: "0.6em",
    },
    errorText: {
      color: "red",
      fontSize: "0.8em",
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
              GUARDING YOUR PEACE OF MIND &nbsp;&nbsp;&nbsp;
            </p>
            <img src={Line} alt="line"></img>
          </div>
          <span style={styles.leftHeading}>Smart Security Solutions</span>
          <span style={styles.leftText}>
            Reliable protection, lightning-fast response, budget-friendly
            solutions – Secure your today, tomorrow and future
          </span>
          <Button
            onClick={handleOpen}
            style={{ marginTop: "2em" }}
            variant="outlined"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
      <div style={styles.childStyle}>
        <img style={{ width: "100%" }} src={Mechanic} alt={"Mechanic"} />
      </div>
      <div style={styles.childStyle}>
        <div style={styles.rightSections}>
          <div style={styles.rightSection}>
            <img style={styles.bluetick} src={BlueTick} alt="tick" />
            <h3 style={styles.rightHeading}>PAN India Service</h3>
            <span style={styles.rightText}>
              Trusted by over 2000 families and businesses across India
            </span>
            <br />
          </div>
          <div style={styles.rightSection}>
            <img style={styles.bluetick} src={BlueTick} alt="tick" />
            <h3 style={styles.rightHeading}>Support Adhere</h3>
            <span style={styles.rightText}>
              Instant support and fast resolvement to your requirements
            </span>
            <br />
          </div>
          <div style={styles.rightSection}>
            <img style={styles.bluetick} src={BlueTick} alt="tick" />
            <h3 style={styles.rightHeading}>Mobile Tracking</h3>
            <span style={styles.rightText}>
              Convenient tracking to your issues and queries
            </span>
            <br />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.popup}>
          {loading ? (
            <CircularProgress></CircularProgress>
          ) : (
            <div style={styles.containerRight}>
              <div
                style={{
                  justifyContent: "center",
                  paddingBottom: "0.4em",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <p style={styles.rightTopText}>CONTACT US</p>
                <img src={Line} alt="line"></img>
              </div>
              <span style={styles.rightText}>
                Fill in details and our experts will get in touch with you
                shortly.
              </span>
              <div style={styles.inputContainer2}>
                <div style={styles.inputMessageContainer}>
                  <TextField
                    id="1"
                    label="Your Name"
                    style={styles.input}
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {nameError && (
                    <span style={styles.errorText}>
                      * &nbsp;Name is required
                    </span>
                  )}
                </div>
                <div style={styles.inputMessageContainer}>
                  <TextField
                    id="2"
                    label="Your Email"
                    style={styles.input}
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && (
                    <span style={styles.errorText}>
                      * &nbsp;Please Enter a Valid Email
                    </span>
                  )}
                </div>
                <TextField
                  id="3"
                  label="Requirements"
                  style={styles.input}
                  variant="outlined"
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                />
                {requirementsError && (
                  <span style={styles.errorText}>
                    * &nbsp;Please Enter your Requirements
                  </span>
                )}
                <TextField
                  id="4"
                  label="Enter Your Message"
                  variant="outlined"
                  style={styles.input}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {messageError && (
                  <span style={styles.errorText}>
                    * &nbsp;Enter Brief information about your requirements
                  </span>
                )}
              </div>
              <Button
                variant="contained"
                style={{ marginTop: "20px" }}
                onClick={handleOpen2}
              >
                Send Request
              </Button>
            </div>
          )}
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.popup}>
          <CheckCircleIcon
            color="primary"
            fontSize="30px"
            sx={{ fontSize: "60px" }}
          />
          <Typography id="modal-modal-title" variant="h4" component="h4">
            Awesome!
          </Typography>
          <p id="modal-modal-description" style={{ margin: "0.5em 0" }}>
            Your requirements are recieved by us.
          </p>
          <p id="modal-modal-description" style={{ margin: "0.5em 0" }}>
            You'll hear from us shortly
          </p>
          <Button
            variant="contained"
            onClick={handleClose2}
            sx={{ marginTop: "1em" }}
          >
            CLOSE
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default FirstSection;
