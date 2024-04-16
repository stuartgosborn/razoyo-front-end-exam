import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom"; // Grid version 2
import React, { useState } from "react";

export default function CarListContainer({ carList, makeList }) {
    console.log(carList);
  return (
    <Grid container spacing={2}>
      {carList.map((car) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={car.id}>
          <Link to={`/car/${car.id}`}>
            <img src={car.image} alt={`${car.year} ${car.make} ${car.model}`} />
            <h3>{car.make}</h3>
            <p>{car.model}</p>
            <p>{car.year}</p>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
