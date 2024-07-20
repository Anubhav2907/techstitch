import React, { useEffect, useState } from "react";
import { SearchBar } from "../Common/Search";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Utils/firebaseConfig";
import CircularProgress from "@mui/material/CircularProgress";

const Tickets = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [tickets, setTickets] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const statusLabels = {
    onhold: "On Hold",
    completed: "Completed",
    inprogress: "In Progress",
    submitted: "Submitted",
    // Add other statuses if needed
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/createrequest");
  };
  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach(async (doc) => {
        if (doc.data().email === localStorage.getItem("email")) {
          setTickets(doc.data().tickets);
        }
      });
      setLoading(false);
    };
    fetchTickets();
  }, []);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTickets = tickets?.filter((ticket) => {
    // Check if the ticket matches the search query
    const matchesSearch =
      searchQuery === "" ||
      ticket.uid.toLowerCase().includes(searchQuery.toLowerCase());

    // Check if the ticket matches the filter status
    const matchesStatus =
      filter === "all" || ticket.status.toLowerCase() === filter.toLowerCase();

    // Return true if both conditions are met
    return matchesSearch && matchesStatus;
  });

  const isMobile = windowWidth <= 767;
  const styles = {
    container: {
      padding: "4em 5em",
      ...(isMobile
        ? {
            paddingTop: "3em",
            paddingBottom: "1em",
            paddingLeft: "1em",
            paddingRight: "1em",
          }
        : {}),
    },
    topContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      ...(isMobile
        ? { flexDirection: "column", alignItems: "flex-start" }
        : {}),
    },
    search: {
      width: "40%",
      ...(isMobile ? { width: "100%", marginBottom: "2em" } : {}),
    },
    radioContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      ...(isMobile ? { flexDirection: "column" } : {}),
    },
    formContainer: {
      width: "50%",
      padding: "2em 0em",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.topContainer}>
        <div style={styles.search}>
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>
        <div>
          <Button
            variant="contained"
            sx={{ height: "2.7rem" }}
            onClick={handleClick}
          >
            {" "}
            <AddIcon color="primary" sx={{ color: "white" }} />
            &nbsp;Add New Ticket
          </Button>
        </div>
      </div>
      <div style={styles.formContainer}>
        <FormControl sx={{ width: "100%" }}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={styles.radioContainer}
            defaultValue={"all"}
            onChange={handleFilterChange}
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel
              value="onhold"
              control={<Radio />}
              label="On Hold"
            />
            <FormControlLabel
              value="inprogress"
              control={<Radio />}
              label="In Progress"
            />
            <FormControlLabel
              value="completed"
              control={<Radio />}
              label="Completed"
            />
          </RadioGroup>
        </FormControl>
      </div>
      {loading ? (
        <CircularProgress />
      ) : !filteredTickets || filteredTickets?.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2em",
            fontSize: "1.5em",
          }}
        >
          <p>No Tickets to display</p>
        </div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "600" }}>
                  Date of Request
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Ticket ID
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Subject
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Status
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Last Update
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTickets?.map((row) => (
                <TableRow
                  key={row?.uid}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{ color: "#717572" }}
                    component="th"
                    scope="row"
                  >
                    {row?.dateOfCreation}
                  </TableCell>
                  <TableCell sx={{ color: "#717572" }} align="center">
                    {row?.uid}
                  </TableCell>
                  <TableCell sx={{ color: "#717572" }} align="center">
                    {row?.issue}
                  </TableCell>
                  <TableCell sx={{ color: "#717572" }} align="center">
                    {statusLabels[row?.status.toLowerCase()] || row?.status}
                  </TableCell>
                  <TableCell sx={{ color: "#717572" }} align="center">
                    {row?.lastUpdate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Tickets;
