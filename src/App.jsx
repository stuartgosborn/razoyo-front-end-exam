import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [carList, setCarList] = useState([]);
  const [makeList, setMakeList] = useState([]);

  // token for authorization

  useEffect(() => {

  const token =
    "SFMyNTY.g2gDbQAAABI6OmZmZmY6MTY5LjI1NC4xLjFuBgCL8pDkjgFiAAFRgA.KM4kFCCoLzV8a-CfiwUfKaXKgBal2NT4Sp6iEL-id1U";

  // url to fetch car list
  const carListUrl = `https://exam.razoyo.com/api/cars`;

  // make call to fetch car list

  try {
    fetch(carListUrl)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCarList(data.cars);
        console.log(carList);
        setMakeList(data.makes);
        console.log(makeList);
      });
  } catch (error) {
    console.error("Error:", error);
  }
  }, []);

  return (
    <>
      <div>

      </div>
    
    </>
  );
}

export default App;
