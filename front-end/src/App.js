import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Form from "./pages/Form/Form.js";
import Form1 from "./pages/Form/Form1.js";
import Home from "./pages/home/Home.js";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route index element={<Home />} />
            <Route path="/add" element={<Form />} />
            <Route path="/edit" element={<Form1 />} />
        </Routes>
    </div>
  );
}

export default App;
