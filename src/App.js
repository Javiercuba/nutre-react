import React, { useState, useEffect } from "react";
import  Navbar    from "./components/NavBar";
import "./App.css";
import { EntryForm } from "./components/Form/EntryForm";

export default function App() {
  return (
    <div>
      <Navbar/>
      <EntryForm />
    </div>
  );
}
