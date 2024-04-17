import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom"; // Grid version 2
import React, { useState } from "react";

export default function CarListContainer({ carList, makeList }) {
    console.log('CAR LIST',carList);
  return (
    <Grid container spacing={8}>
      {carList.map((car) => (
        <Grid item xs={12} sm={12} md={4} lg={4} key={car.id}>
          <div style={{textAlign: 'center'}}>

          <Link to={`/cars/${car.id}`} style={{display: 'flex', flexDirection: 'column' , alignItems: 'center'}}>
            <img className='carImg' src={car.image} alt={`${car.year} ${car.make} ${car.model}`} />
            <h3>{car.make}</h3>
            <p>{car.model}</p>
            <p>{car.year}</p>
          </Link>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
