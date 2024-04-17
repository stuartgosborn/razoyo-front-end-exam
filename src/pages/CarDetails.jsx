import {useParams} from "react-router-dom";
import React, { useState, useEffect } from "react";
import CarCard from "../components/CarCard";

export default function CarDetails() {
        const [carList, setCarList] = useState([]);
     
        
        // retrieve the car id from the URL
        const { id } = useParams();
        // url to fetch car list
        const carListUrl = `https://exam.razoyo.com/api/cars`;

        useEffect(() => {
                        
                // make call to fetch car list

                try {
                    fetch(carListUrl)
                        .then((response) => {
                            console.log(response);
                            return response.json();
                        })
                        .then((data) => {
                            console.log( 'DATA',data);
                            setCarList(data.cars);
                            console.log(carList);
                        });
                } catch (error) {
                    console.error("Error:", error);
                }
            }, [carList, carListUrl]);

        
        const car = carList.find((car) => car.id === id);
        console.log('CAR',car);
     

        return (
                <>
                <CarCard car={{...car}} />
                </>
        );
}
