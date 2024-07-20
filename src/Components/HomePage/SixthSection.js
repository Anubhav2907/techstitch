import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Line from "../../Images/line.svg";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Utils/firebaseConfig";
import CircularProgress from "@mui/material/CircularProgress";

const SixthSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [requirementsError, setRequirementsError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [open, setOpen] = useState(false);
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
    if (!validateFields()) return;
    setLoading(true);
    await setDoc(doc(db, "requirements", uuidv4()), {
      name: name,
      email: email,
      requirements: requirements,
      message: message,
    });
    setLoading(false);
    setOpen(true);
  };
  const handleClose = () => {
    setName("");
    setEmail("");
    setRequirements("");
    setMessage("");
    setOpen(false);
  };

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
      paddingLeft: "4em",
      boxSizing: "border-box",
      textAlign: "center",
      ...(isMobile ? { width: "calc(100% - 20px)" } : {}),
      ...(isMobile ? { padding: "0em" } : {}),
      ...(isMobile ? { paddingLeft: "1em" } : {}),
    },
    imgContainer: {
      margin: "10px",
      paddingRight: "2em",
      width: "40%",
      boxSizing: "border-box",
      textAlign: "center",
      ...(isMobile ? { width: "calc(100% - 20px)" } : {}),
      ...(isMobile ? { padding: "0" } : {}),
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
      paddingTop: "1em",
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      width: "90%",
      paddingTop: "30px",
      ...(isMobile ? { width: "100%" } : {}),
    },
    topInputs: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: "10px",
      width: "100%",
      ...(isMobile ? { flexDirection: "column" } : {}),
      ...(isMobile ? { marginBottom: "0" } : {}),
    },
    input: {
      width: "100%",
      ...(isMobile ? { width: "100%" } : {}),
    },
    input2: {
      width: "100%",
    },
    input2container: {
      marginBottom: "10px",
      ...(isMobile ? { marginBottom: "20px" } : {}),
    },
    errorText: {
      color: "red",
      fontSize: "0.8em",
    },
    inputMessageContainer: {
      display: "flex",
      flexDirection: "column",
      width: "48%",
      ...(isMobile ? { width: "100%", marginBottom: "20px" } : {}),
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
  };
  return (
    <div style={styles.containerStyle}>
      <div style={styles.childStyle}>
        {loading ? (
          <CircularProgress></CircularProgress>
        ) : (
          <div style={styles.containerRight}>
            <div
              style={{
                justifyContent: "center",
                paddingBottom: "1em",
              }}
            >
              <p style={styles.rightTopText}>CONTACT US &nbsp;&nbsp;&nbsp;</p>
              <img src={Line} alt="line"></img>
            </div>
            <span style={styles.rightHeading}>Get In Touch</span>
            <span style={styles.rightText}>
              Fill in details and our experts will get in touch with you
              shortly.
            </span>
            <div style={styles.inputContainer}>
              <div style={styles.topInputs}>
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
              </div>
              <div style={styles.input2container}>
                <TextField
                  id="3"
                  label="Requirements"
                  style={styles.input2}
                  variant="outlined"
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                />
                {requirementsError && (
                  <span style={styles.errorText}>
                    * &nbsp;Please Enter your Requirements
                  </span>
                )}
              </div>
              <TextField
                id="4"
                label="Enter Your Message"
                variant="outlined"
                style={styles.input2}
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
              onClick={handleOpen}
            >
              Contact Us
            </Button>
          </div>
        )}
      </div>
      <div style={styles.imgContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6405.70016483211!2d77.73562621842676!3d12.982988030318449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11fa1fd42325%3A0x31bb986f65cdfa1b!2sFOYER%20INFINITY%2C%20Pattandur%20Agrahara%2C%20Whitefield%2C%20Bengaluru%2C%20Karnataka%20560066!5e0!3m2!1sen!2sin!4v1718405469295!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
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
            onClick={handleClose}
            sx={{ marginTop: "1em" }}
          >
            CLOSE
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default SixthSection;
