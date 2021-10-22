import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import { EntryForm } from "./components/Form/EntryForm";

const ParseCSV = (text) => {
  const result = {
    header: [],
    data: [],
  };
  const [header, ...content] = text.split("\n");

  result.header = header.split(",");

  content.forEach((item) => {
    result.data.push(item.split(","));
  });
  console.log(result);
};

export default function App() {
  useEffect(() => {
    fetch('./teste.csv')
      .then((r) => r.text())
      .then((text) => {
        ParseCSV(text);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <EntryForm />
      <div className="App"></div>
    </div>
  );
}
