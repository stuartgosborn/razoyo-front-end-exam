import React, { useState, useEffect } from "react";
import CarListContainer from "../components/CarList";

export default function Home() {
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
  
    console.log("carList", carList);
    console.log("makeList", makeList);

    return (
        <div>
        <CarListContainer carList={carList} makeList={makeList} />
        </div>
    );
    }