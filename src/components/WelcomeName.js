import React, { useState } from "react";
import "../styles/WelcomeName.css";
import WelcomeBirthday from "./WelcomeBirthday";

const WelcomeName = () => {
  const [name, setName] = useState("");
  const [showPrompt, setShowPrompt] = useState(true);

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      setShowPrompt(false);

    }
  };

  return (
    <div className="container">
      {!showPrompt && (
        <h1>Welcome to Astro, {name}</h1>
      )}
      {showPrompt && (
        <div className="prompt">
         <p className="prompt-text">Please enter your name and birthday:</p>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onKeyUp={handleKeyUp}
            className="input-transparent"
          />
        </div>
      )}
    </div>
  );
};

export default WelcomeName;

