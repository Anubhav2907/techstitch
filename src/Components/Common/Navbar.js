import { useEffect, useRef, useState } from "react";
import { FaBars, FaCaretDown, FaTimes } from "react-icons/fa";
import Logo from "../../Images/LogoMain.svg";
import "../../Styles/Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SignInwithGoogle from "./GoogleAuth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);
  const [navigateTo, setNavigateTo] = useState();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const navRef = useRef();
  const dropdownRef = useRef();
  const supportDropdownRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        supportDropdownRef.current &&
        !supportDropdownRef.current.contains(event.target)
      ) {
        setSupportDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {}, [user]);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsNavOpen(!isNavOpen);
  };

  const handleScroll = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const checkLoginAndCreate = () => {
    setNavigateTo("/createrequest");
    if (localStorage.getItem("user"))
      setUser(JSON.parse(localStorage.getItem("user")));
    if (user) {
      navigate("/createrequest");
    } else {
      handleOpen();
    }
  };
  const checkLoginAndView = () => {
    setNavigateTo("/support");
    if (localStorage.getItem("user"))
      setUser(JSON.parse(localStorage.getItem("user")));
    if (user) {
      navigate("/support");
    } else {
      handleOpen();
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
  };

  const styles = {
    popup: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 500,
      bgcolor: "background.paper",
      boxShadow: 24,
      borderRadius: "20px",
      textAlign: "center",
      p: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    loginText: {
      fontSize: "2em",
      paddingBottom: "0.6em",
    },
    dropdown: {
      position: "absolute",
      top: "60px",
      right: "10px",
      backgroundColor: "#fff",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      borderRadius: "8px",
      width: "200px",
      zIndex: 1,
      textAlign: "left",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    supportDropdown: {
      position: "absolute",
      top: "40px",
      right: "0px",
      backgroundColor: "#fff",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      borderRadius: "8px",
      width: "200px",
      zIndex: 1,
      textAlign: "left",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    dropdownItem: {
      padding: "10px",
      cursor: "pointer",
      color: "black",
    },
    userImageContainer: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      position: "relative",
      color: "black",
    },
    userImage: {
      borderRadius: "50%",
      height: "40px",
      width: "40px",
      marginRight: "5px",
    },
    supportContainer: {
      position: "relative",
    },
  };

  return (
    <header>
      <div
        className="logoDiv"
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          className="logo"
          src={Logo}
          alt="logo"
          style={{ height: "90px", cursor: "pointer" }}
        />
        <h3 className="heading" style={{ cursor: "pointer" }}>
          TECHSTITCH
        </h3>
      </div>
      <button className="nav-btn" style={{ zIndex: 25 }} onClick={showNavbar}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav ref={navRef}>
        <a href="/" onClick={() => handleScroll("")}>
          Home
        </a>
        <a href="/aboutus">About Us</a>
        <a
          href="#ContactUs"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("ContactUs");
          }}
        >
          Contact Us
        </a>
        <div ref={supportDropdownRef} style={styles.supportContainer}>
          <a
            href="#"
            onClick={() => setSupportDropdownOpen(!supportDropdownOpen)}
          >
            Support <FaCaretDown />
          </a>
          {supportDropdownOpen && (
            <div style={styles.supportDropdown}>
              <a
                href="#"
                style={{ margin: "0 0.4em", padding: "10px 0" }}
                onClick={checkLoginAndView}
              >
                View All Requests
              </a>
              <a
                href="#"
                style={{ margin: "0 0.4em", padding: "10px 0" }}
                onClick={checkLoginAndCreate}
              >
                Create a Service Request
              </a>
            </div>
          )}
        </div>
        {/* <div className="live">
          <a href="#" onClick={checkLogin}>
            Create a Service Request
          </a>
        </div> */}
        {user && (
          <div
            ref={dropdownRef}
            style={styles.userImageContainer}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img src={user.picture} alt="img" style={styles.userImage} />
            <FaCaretDown />
            {dropdownOpen && (
              <div style={styles.dropdown}>
                <div style={styles.dropdownItem}>{user.name}</div>
                <div style={styles.dropdownItem}>{user.email}</div>
                <div style={styles.dropdownItem} onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.popup}>
          <p
            style={styles.loginText}
            id="modal-modal-title"
            variant="h6"
            component="h6"
          >
            Please sign in to Continue
          </p>
          <SignInwithGoogle navigateTo={navigateTo}></SignInwithGoogle>
        </Box>
      </Modal>
    </header>
  );
};

export default Navbar;
