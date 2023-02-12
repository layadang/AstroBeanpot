import React from "react";
import GetUserInfo from "./components/GetUserInfo";
import { useState, useEffect } from "react";
import Aztro from "./components/Aztro";
import GetAstrologicalSign from "./components/GetAstrologicalSign.js";

const App = () => {
  const [birthday, setBirthday] = useState("");
  const [astrologicalSign, setAstrologicalSign] = useState("");
  const [sign, setSign] = useState("");


  useEffect(() => {
    const storedBirthday = localStorage.getItem("birthday") || "";
    setBirthday(storedBirthday);
    console.log(storedBirthday);
    if (storedBirthday) {
      setAstrologicalSign(GetAstrologicalSign(storedBirthday));
    }
    const storedSign = localStorage.getItem("sign");
    console.log(localStorage.getItem("sign"));

   }, []);

  return (
    <div>
      <GetUserInfo />
      <GetAstrologicalSign birthday={localStorage.getItem("birthday")} />

    </div>
  );
};

export default App;
