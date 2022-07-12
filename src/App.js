import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import axios from "axios";
import { EntryForm } from "./components/Form/EntryForm";
import NewChart from "./components/NewChart";
import parseCSV from "./helpers/parsecsv";
import _ from "lodash";

import Search from "../src/components/Search";

export default function App() {
  //Consumido
  const [id, setid] = useState(Math.floor(Math.random() * 100));
  const [nutrientes, setNutrientes] = useState([]);
  const [nutrientesSelecionados, setNutrientesSelecionados] = useState([]);

  //Salvar o id do usuario somente uma vez
  useEffect(() => {
    console.log(id); 
    axios
      .post(`https://62a35d1421232ff9b21e9c6a.mockapi.io/users/`,
        { "Userid":id } 
    ).then(() => {
      console.log(`Usuario criado com id ${id}`);
      console.log(axios.get(`https://62a35d1421232ff9b21e9c6a.mockapi.io/users/2`));
      });
    //setid(getid());
  }, []);

  //so sera executado quando o site abrir pela primeira vez
  useEffect(() => {
    fetch("./nutrientes.csv")
      .then((r) => r.text())
      .then((text) => {
        setNutrientes(parseCSV(text));
      });
  }, []);
  //Sera executado sempre que nutrientes for atualizado e
  //quando a aplicacao rodar pela primeira vey

  useEffect(() => {
    setNutrientesSelecionados([]);
  }, [nutrientes]);

  //console.log(nutrientesSelecionados);

  return (
    <main>
      <Navbar />
      <div className="inicial">
        <EntryForm />
        <Search nutrientes={nutrientes} id={id} />
      </div>

      <NewChart nutrientesSelecionados={nutrientesSelecionados} />

      <div className="App"></div>
    </main>
  );
}
