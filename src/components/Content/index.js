import React from "react";
import { Grid } from "@material-ui/core";
import TheCard from "./TheCard";

const Content = ({ cars, Ready, searchVal }) => {
  cars = Ready !== "" ? cars.filter((car) => car.ready === Ready) : cars;
  cars =
    searchVal !== ""
      ? cars.filter((car) =>
          car.nama.toLowerCase().includes(searchVal.toLowerCase())
        )
      : cars;
  return (
    <Grid style={{ paddingTop: 40 }} container spacing={4}>
      {cars.map((car, idx) => (
        <Grid key={idx} item sm={4} xs={12}>
          <TheCard
            type={car.type}
            nama={car.nama}
            price={car.harga}
            ready={car.ready}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
