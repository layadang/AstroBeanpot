import React, { useState } from "react";
import "../styles/WelcomeName.css";


const WelcomeBirthday = () => {
  const [birthday, setBirthday] = useState("");

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
    localStorage.setItem("birthday", event.target.value);
  };

  return (
    <div>
      {!birthday ? (
        <div className="birthday">
        <label>Enter your birthday:</label>
        <input type="date" onChange={handleBirthdayChange} />
      </div>
      ) : (
        <p>Your birthday is on {birthday}.</p>
      )}
    </div>
  );
};

export default WelcomeBirthday;