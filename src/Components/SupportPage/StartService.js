import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Line from "../../Images/line.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Utils/firebaseConfig";
import CircularProgress from "@mui/material/CircularProgress";

const StartService = () => {
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
          onClick={handleOpen}
        >
          Contact Now
        </Button>
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

export default StartService;
