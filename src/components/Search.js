import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export class Search extends Component {
  render() {
    const Nutrientes = this.props.nutrientes;
    const selecionarNutrientes = this.props.selecionarNutriente;

    //console.log(Nutrientes);

    const handleInput = (event, value) => {
      Nutrientes.map((element) => {
        if (value.values().next().value === element.Nome) {
          selecionarNutrientes(element);
          console.log("igual");
        }
        //console.log(element.Nome);
        //console.log(value.values().next().value);
      });
      console.log(event);
    };

    return (
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          onChange={handleInput}
          id="free-solo-demo"
          fullWidth
          multiple
          options={Nutrientes.map((option) => option.Nome)}
          renderInput={(params) => <TextField {...params} label="freeSolo" />}
        />
      </Stack>
    );
  }
}
export default Search;
