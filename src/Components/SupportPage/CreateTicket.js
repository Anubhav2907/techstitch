import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { collection, getDocs, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../Utils/firebaseConfig";
import { getCurrentDate } from "../../Utils/Date";
import { v4 as uuidv4 } from "uuid";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [issue, setIssue] = useState("");
  const [remarks, setRemarks] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [issueError, setIssueError] = useState(false);
  const [remarksError, setRemarksError] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 767;
  const styles = {
    containerRight: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-evenly",
      height: "100%",
      textAlign: "left",
      padding: "5em 2em",
      maxWidth: "70%",
      margin: "auto",
      ...(isMobile ? { padding: "3em 0em", maxWidth: "85%" } : {}),
    },
    rightHeading: {
      fontSize: "3.5em",
      lineHeight: "1.2",
      fontFamily: "Sans-Serif",
      ...(isMobile ? { width: "100%" } : {}),
      ...(isMobile ? { fontSize: "3em" } : {}),
    },
    rightText: {
      color: "#6e6d6a",
      ...(isMobile ? { paddingTop: "1em" } : {}),
      paddingTop: "1em",
      paddingBottom: "2em",
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      paddingTop: "10px",
      ...(isMobile ? { width: "100%" } : {}),
    },
    topInputs: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: "30px",
      width: "100%",
      ...(isMobile ? { flexDirection: "column" } : {}),
      ...(isMobile ? { marginBottom: "0" } : {}),
    },
    input: {
      width: "48%",
      ...(isMobile ? { marginBottom: "20px" } : {}),
      ...(isMobile ? { width: "100%" } : {}),
    },
    inputContainer2: {
      width: "100%",
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
    errorText: {
      color: "red",
      fontSize: "0.8em",
    },
  };
  const validateFields = () => {
    let isValid = true;
    if (!name) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }
    if (!phone) {
      setPhoneError(true);
      isValid = false;
    } else {
      setPhoneError(false);
    }
    if (!email) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }
    if (!issue) {
      setIssueError(true);
      isValid = false;
    } else {
      setIssueError(false);
    }
    if (!remarks) {
      setRemarksError(true);
      isValid = false;
    } else {
      setRemarksError(false);
    }
    return isValid;
  };
  const handleClick = () => {
    navigate("/support");
  };
  const handleOpen = async () => {
    if (!validateFields()) return;
    setLoading(true);
    handleOpen2();
    const uid = uuidv4().split("-")[0];
    setTicketId(uid);
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach(async (doc) => {
      if (doc.data().email === localStorage.getItem("email")) {
        const docRef = doc.ref;
        await updateDoc(docRef, {
          tickets: arrayUnion({
            name,
            phone,
            email,
            issue,
            remarks,
            status: "Submitted",
            dateOfCreation: getCurrentDate,
            lastUpdate: getCurrentDate,
            uid,
          }),
        });
      }
    });
    setLoading(false);
    setOpen2(false);
    setOpen(true);
  };
  const handleOpen2 = async () => {
    setOpen2(true);
  };
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);

  return (
    <div>
      <div style={styles.containerRight}>
        <span style={styles.rightHeading}>Create Ticket</span>
        <span style={styles.rightText}>
          For faster resolution, please provide detailed information about your
          issue in the form below
        </span>
        <div style={styles.inputContainer}>
          <div style={styles.topInputs}>
            <div style={styles.input}>
              <TextField
                id="1"
                label="Your Name"
                variant="outlined"
                value={name}
                style={styles.inputContainer2}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && (
                <span style={styles.errorText}>* &nbsp;Name is required</span>
              )}
            </div>
            <div style={styles.input}>
              <TextField
                id="2"
                label="Your Phone"
                variant="outlined"
                value={phone}
                style={styles.inputContainer2}
                onChange={(e) => setPhone(e.target.value)}
              />
              {phoneError && (
                <span style={styles.errorText}>* &nbsp;Phone is required</span>
              )}
            </div>
          </div>
          <div style={styles.topInputs}>
            <div style={styles.input}>
              <TextField
                id="3"
                label="Your Email"
                style={styles.inputContainer2}
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <span style={styles.errorText}>* &nbsp;Email is required</span>
              )}
            </div>
            <div style={styles.input}>
              <TextField
                id="4"
                label="Specify the Issue"
                style={styles.inputContainer2}
                variant="outlined"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
              />
              {issueError && (
                <span style={styles.errorText}>* &nbsp;Issue is required</span>
              )}
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <TextField
              id="5"
              label="Remarks"
              style={{ width: "100%" }}
              variant="outlined"
              rows={3}
              multiline
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
            {remarksError && (
              <span style={styles.errorText}>* &nbsp;Remarks are required</span>
            )}
          </div>
        </div>
        <div
          style={{
            margin: "auto",
          }}
        >
          <Button
            variant="outlined"
            style={{
              marginTop: "20px",
              padding: "0.7em 2.6em",
              fontSize: "1.1em",
              borderWidth: "2px",
            }}
            onClick={handleOpen}
          >
            SUBMIT
          </Button>
        </div>
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
            We will get back to you shortly
          </p>
          <p id="modal-modal-description" style={{ margin: "0.5em 0" }}>
            Your ticket Id is: {ticketId}
          </p>
          <Button
            onClick={handleClick}
            variant="contained"
            sx={{ marginTop: "1em" }}
          >
            TRACK NOW
          </Button>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.popup}>
          <CircularProgress />
        </Box>
      </Modal>
    </div>
  );
};

export default CreateTicket;
