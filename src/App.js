import React, {useEffect } from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import { EntryForm } from "./components/Form/EntryForm";
import Chartpercent from "./components/ChartPercent";
import  Search  from "./components/Search";

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
  
};

export default function App() {
  useEffect(() => {
    fetch('./nutrientes.csv')
      .then((r) => r.text())
      .then((text) => {
        ParseCSV(text);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <EntryForm />
      <Search />
      <Chartpercent />
      <div className="App"></div>
    </div>
  );
}
