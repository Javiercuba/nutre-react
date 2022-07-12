import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Read from "../db/read";
import Autocomplete from "@mui/material/Autocomplete";

export class Search extends Component {

  render() {
    const Nutrientes = this.props.nutrientes;
    const idUser = this.props.IdUser;
    /**
     *
     * @param {*} _
     * @param {Array} value
     */
   console.log(idUser);
    const postData = (nome) => {
      if (nome) {
        axios
          .post(
            `https://62a35d1421232ff9b21e9c6a.mockapi.io/users/${idUser}/Consumido`,
            {
              "Alimento": "Abacaxi"
              //"Quantidade": "Quantidade 1",

              
            }
          )
          .then(() => {
            console.log("Adicionado");
          })
          .catch(() => {
            console.log("Erro");
          });
      } else {
        console.log("Não adicionado");
      }
    };
    //console.log(Nutrientes);

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
            onChange={(e,value) => {
              console.log();
              postData(value);
             
            }}
          />
        </div>
            <Read/>
       
      </div>
    );
  }
}
export default Search;
