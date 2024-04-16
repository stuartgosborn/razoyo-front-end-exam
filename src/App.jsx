import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // token for authorization
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
      });
  } catch (error) {
    console.error("Error:", error);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1></h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
