import { useState, useEffect } from "react";

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
           <div>
              You are a {sign} <br />
               Compatibility: {data.compatibility} <br />
               Lucky Number: {data.lucky_number} <br />
                Lucky Time: {data.lucky_time} <br />
               Color: {data.color} <br />
               Date Range: {data.date_range} <br />
               Mood: {data.mood} <br />
               Description: {data.description} <br />  
           </div>
         );
       }
    
}

export default Aztro;