import React, { useState } from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { Grid } from "@material-ui/core";

const App = () => {
  const cars = [
    { type: "Mobil", harga: "Rp 148.000.000", ready: true, nama: "Brio" },
    { type: "Mobil", harga: "Rp 205.500.000", ready: true, nama: "Mobilio" },
    { type: "Mobil", harga: "Rp 252.500.000", ready: false, nama: "Jazz" },
    { type: "Motor", harga: "Rp 16.000.000", ready: true, nama: "Beat" },
    { type: "Motor", harga: "Rp 29.000.000", ready: false, nama: "PCX" },
    { type: "Motor", harga: "Rp 35.000.000", ready: true, nama: "CBR150R" },
  ];
  const [Search, setSearch] = useState("");

  const [Ready, setReady] = useState("");

  const handleSelect = (event) => {
    setReady(event.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Nav
        items={cars}
        onSelect={handleSelect}
        Ready={Ready}
        searchVal={Search}
        onSearch={handleSearch}
      />
      <Grid container direction="row">
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Content cars={cars} Ready={Ready} searchVal={Search} />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
