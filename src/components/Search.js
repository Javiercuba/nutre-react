import React, { Component, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Read from "../db/read";
import Autocomplete from "@mui/material/Autocomplete";


class Search extends Component {
  render() {
    const Nutrientes = this.props.nutrientes;

    //const [food, setFood] = useState("");
    /**
     *
     * @param {*} _
     * @param {Array} value
     */
    //console.log(idUser);

    return (
      <div className="box">
        <div className="search">
          <Autocomplete
            id="free-solo-demo"
            fullWidth
            options={Nutrientes.map((option) => option.Nome)}
            renderInput={(params) => (
              <TextField {...params} label="Escolha um alimento" />
            )}
            onChange={(e, value) => {
              console.log(value);
              // modificar isso daqui pra salvar no local storage
            }}
          />
        </div>
        <Read />
      </div>
    );
  }
}
export default Search;
