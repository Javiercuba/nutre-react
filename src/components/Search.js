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

    console.log(Nutrientes);
    return (
      <div className="box">
        <div className="search">
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
          
        </div>
        <div id="example" className="Scrool">
          <table>
            <caption>Nutrientes Selecionados</caption>
            <thead>
              <tr>
                <th scope="col">Alimento</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Unidade</th>
              </tr>
            </thead>
            <tbody>
              {Nutrientes.map((row) => (
                <tr>
                  <td data-label="Alimento">{row.Nome}</td>
                  <td data-label="Quantidade">{row.GordTotal}</td>
                  <td data-label="Unidade">{row.Unidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Search;
