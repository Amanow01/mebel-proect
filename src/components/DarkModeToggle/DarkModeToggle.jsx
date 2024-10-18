import { useContext } from "react";
import styles from "./DarkModeToggle.css";

const DarkModeToggle = () => {
  const mode = "light ";

  return (
    <div className="toggle-container">
      <div className="icon">🌙</div>
      <div className="icon">🔆</div>
      <div
        className="ball"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
