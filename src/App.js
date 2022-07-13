import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import { EntryForm } from "./components/Form/EntryForm";
import NewChart from "./components/NewChart";
import parseCSV from "./helpers/parsecsv";
import _ from "lodash";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

import Search from "../src/components/Search";

export default function App() {
  //Consumido
  const [id, setid] = useState(Math.floor(Math.random() * 100));
  
  //setid(2);
  const [nutrientes, setNutrientes] = useState([]);
  const [nutrientesSelecionados, setNutrientesSelecionados] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { id: 2, name: "Javier" });
  };

  //createUser();
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      //setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getUsers();
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
