import React, { useState } from "react";
import GetAstrologicalSign from "./GetAstrologicalSign";
import Aztro from "./Aztro";

function GetUserInfo(props) {
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

    localStorage.setItem("name", name);
    console.log(localStorage.getItem("name"));

    localStorage.setItem("birthday", birthday);
    console.log(localStorage.getItem("birthday")); // CHANGE TO SET
    props.setBirthday(birthday);

    const astrologicalSign = GetAstrologicalSign(birthday);
    localStorage.setItem("sign", astrologicalSign);
    console.log(localStorage.getItem("sign"));

    setShowForm(false);

    event.preventDefault();

  };

  return (
    <>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="birthday">Birthday:</label>
            <input
              type="date"
              id="birthday"
              value={birthday}
              onChange={handleBirthdayChange}
            />
          </div>

          <button type="submit">Send</button>

        </form>
      ) : (
        <Aztro sign={localStorage.getItem("sign")} day="today"/> // CHANGE TO SET STATUS
      )}
    </>
  );
};


export default GetUserInfo;