import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export class Search extends Component {
  render() {
    const Nutrientes = this.props.nutrientes;
    const selecionarNutrientes = this.props.selecionarNutriente;



    /**
     *
     * @param {*} _
     * @param {Array} value
     */
    const handleInput = (_, value) => {
      selecionarNutrientes(
        value.map((nutrienteSelecionado) =>
          Nutrientes.find(({ Nome }) => Nome === nutrienteSelecionado)
          
        )
        
      );
    };

    return (
      <div className="search">
        <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            onChange={handleInput}
            id="free-solo-demo"
            fullWidth
            multiple
            options={Nutrientes.map((option) => option.Nome)}
            renderInput={(params) => (
              <TextField {...params} label="Escolha um alimento" />
            )}
          />
        </Stack>
      </div>
    );
  }
}
export default Search;
