import React, { useState } from "react";
import GetAstrologicalSign from "./GetAstrologicalSign";
import Aztro from "./Aztro";

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
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="birthday">Birthday:</label>
            <input
              type="date"
              id="birthday"
              value={birthday}
              onChange={handleBirthdayChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <Aztro sign={localStorage.getItem("sign")} day="today"/>
      )}
    </>
  );
};


export default GetUserInfo;