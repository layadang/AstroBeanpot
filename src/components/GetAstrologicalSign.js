
const GetAstrologicalSign = birthday => {
    const date = new Date(birthday);
    const month = date.getMonth();
    const day = date.getDate();
  
    if (month === 0 && day <= 19) {
        localStorage.setItem("sign", "capricorn");
      return "capricorn";
    } else if (month === 1 && day <= 18) {
        localStorage.setItem("sign", "aquarius");
        console.log("aquarius");
      return "aquarius";
    } else if (month === 2 && day <= 20) {
        localStorage.setItem("sign", "pisces");
      return "pisces";
    } else if (month === 3 && day <= 19) {
        localStorage.setItem("sign", "aries");
      return "aries";
    } else if (month === 4 && day <= 20) {
        localStorage.setItem("sign", "taurus");
      return "taurus";
    } else if (month === 5 && day <= 20) {
        localStorage.setItem("sign", "gemini");
      return "gemini";
    } else if (month === 6 && day <= 22) {
        localStorage.setItem("sign", "cancer");
      return "cancer";
    } else if (month === 7 && day <= 22) {
        localStorage.setItem("sign", "leo");
      return "leo";
    } else if (month === 8 && day <= 22) {
        localStorage.setItem("sign", "virgo");
      return "virgo";
    } else if (month === 9 && day <= 22) {
        localStorage.setItem("sign", "libra");
      return "libra";
    } else if (month === 10 && day <= 21) {
        localStorage.setItem("sign", "scorpio");
      return "scorpio";
    } else if (month === 11 && day <= 21) {
        localStorage.setItem("sign", "sagittarius");
      return "sagittarius";
    } else {
        localStorage.setItem("sign", "capricorn");
      return "capricorn";
    }
  };

  export default GetAstrologicalSign;