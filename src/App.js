import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import { EntryForm } from "./components/Form/EntryForm";
import NewChart from "./components/NewChart";
import parseCSV from "./helpers/parsecsv";
import _ from "lodash";
import Search from "../src/components/Search";

export default function App() {
  const [nutrientes, setNutrientes] = useState([]);
  const [nutrientesSelecionados, setNutrientesSelecionados] = useState([]);

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

  //console.log(nutrientes);

  const selecionarNutriente = (nutrienteSelecionado) => {
    setNutrientesSelecionados(nutrienteSelecionado);
  };

  return (
    <main>
      <Navbar />

      <EntryForm />
      <Search
        nutrientes={nutrientes}
        selecionarNutriente={selecionarNutriente}
      />
      <NewChart nutrientesSelecionados={nutrientesSelecionados} />

      <div className="App"></div>
    </main>
  );
}
