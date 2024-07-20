import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ setSearchQuery }) => {
  useEffect(() => {
    const placeholderColor = "grey";
    const style = document.createElement("style");
    style.innerHTML = `
      input::placeholder {
        color: ${placeholderColor};
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const styles = {
    container: {
      width: "100%",
      height: "3rem",
      border: "none",
      borderRadius: "10px",
      padding: "0 15px",
      boxShadow: "0px 0px 8px #ddd",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
    },
    input: {
      backgroundColor: "transparent",
      border: "none",
      height: "100%",
      fontSize: "1.25rem",
      width: "100%",
      marginLeft: "5px",
      color: "black",
      fontFamily: "Sans-Serif",
      letterSpacing: "0.1mm",
    },
    icon: {
      color: "lightgray",
    },
  };

  const inputStyle = {
    outline: "none",
  };

  const handleFocus = (e) => {
    Object.assign(e.target.style, inputStyle);
  };

  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    setSearchQuery(value);
  };

  return (
    <div style={styles.container}>
      <FaSearch id="search-icon" style={styles.icon} />
      <input
        style={styles.input}
        placeholder="Find Tickets ..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={handleFocus}
      />
    </div>
  );
};
