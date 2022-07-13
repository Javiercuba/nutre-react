import React, { Component, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Read from "../db/read";
import Autocomplete from "@mui/material/Autocomplete";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./../firebase-config";

class Search extends Component {
  render() {
    const Nutrientes = this.props.nutrientes;
    const id = this.props.id;
    //const [food, setFood] = useState("");
    /**
     *
     * @param {*} _
     * @param {Array} value
     */
    //console.log(idUser);
    const usersCollectionRef = collection(db, "foodconsumed");

    const insertNutrientes = (value) => {
      //const nutrientes = value.map((nutriente) => nutriente.id);
      console.log(value);
      addDoc(usersCollectionRef, {
        Name: value,
        idUser: 2,
      });
    };

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
              insertNutrientes(value);
            }}
          />
        </div>
        <Read />
      </div>
    );
  }
}
export default Search;
