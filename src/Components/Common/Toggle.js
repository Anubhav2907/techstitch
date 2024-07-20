import React, { useState } from "react";
import "../../Styles/Toggle.css";

const ToggleButton = ({ leftLabel, rightLabel }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="toggle-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleHandler}
        className="toggle-input"
      />
      <span className="toggle-slider"></span>
      <span className="left-label">Dark</span>
      <span className="right-label">Light</span>
    </label>
  );
};

export default ToggleButton;
