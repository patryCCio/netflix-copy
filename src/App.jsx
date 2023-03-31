import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import SignIn from "./signin/SignIn";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
