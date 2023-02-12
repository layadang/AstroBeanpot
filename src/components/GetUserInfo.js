import React, { useState } from "react";
import GetAstrologicalSign from "./GetAstrologicalSign";
import Aztro from "./Aztro";
import WelcomeName from "../styles/WelcomeName.css";
import Wheel from "./Wheel";

const GetUserInfo = () => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [showForm, setShowForm] = useState(true);


  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleBirthdayChange = event => {
    setBirthday(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    localStorage.setItem("name", name);
    console.log(localStorage.getItem("name"));

    localStorage.setItem("birthday", birthday);
    console.log(localStorage.getItem("birthday"));

    const astrologicalSign = GetAstrologicalSign(birthday);
    localStorage.setItem("sign", astrologicalSign);
    console.log(localStorage.getItem("sign"));

    setShowForm(false);

  };

  return (
    <> 
      {showForm ? (
       
        <form onSubmit={handleSubmit}>
         
          <div className="prompt">
         <p className="prompt-text">Please enter your name and birthday:</p>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="input-transparent"
          />
        </div>
          <div className="birthday">
            <input
              type="date"
              id="birthday"
              value={birthday}
              onChange={handleBirthdayChange}
            />
          </div>
          <button className="submit" type="submit">Submit</button>
        </form>
      ) : (
        <Aztro sign={localStorage.getItem("sign")} day="today"/>
        
      )}
      <Wheel />
    </>
  );
};


export default GetUserInfo;
