import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export class Search extends Component {
  render() {
    const Nutrientes = this.props.nutrientes;
    const handleInput = (event, value) => {
      console.log(value);
    };

    //console.log(Nutrientes[1]);
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
