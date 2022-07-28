import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import { Container } from "./components/Container";

function App() {
  return (
    <div>
      <Navbar />
      <div class="d-flex justify-content-center p-5 h-100 ">
      <Container />
      </div>
    </div>
  );
}

export default App;
