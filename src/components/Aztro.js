import { useState, useEffect } from "react";
import "../styles/WelcomeName.css";

const Aztro = ({sign, day}) => {
    const [data, setData] = useState();
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;

     useEffect(() => {
        console.log(localStorage.getItem("sign"));
        console.log(sign)
         fetch(URL, {method: 'POST'})
         .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => {
            console.log(data);
            localStorage.setItem("sign", sign);
            setData(data)})
        
       },[])

       if(data) {
         return (
      
            <h2>
               Current Date: {data.current_date} <br />
               Compatibility: {data.compatibility} <br />
               Lucky Number: {data.lucky_number} <br />
                Lucky Time: {data.lucky_time} <br />
               Color: {data.color} <br />
             Mood: {data.mood} <br />
               Description: {data.description} <br />  
               </h2>
         );
       }
    
}

export default Aztro;
