import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import { EntryForm } from "./components/Form/EntryForm";
import NewChart from "./components/NewChart";
import parseCSV from "./helpers/parsecsv";
import _ from "lodash";
import { db } from "./firebase-config";

import { collection, getDocs, addDoc } from "firebase/firestore";
import { StyledEngineProvider } from "@mui/material";
import Search from "../src/components/Search";

import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
} from "@mui/material";

export default function App() {
  //setid(2);
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

  console.log(nutrientes);

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Navbar />
      <div className="inicial">
        <EntryForm />
        <Search nutrientes={nutrientes} />
      </div>

      <NewChart nutrientesSelecionados={nutrientesSelecionados} />
    </StyledEngineProvider>
  );
}
