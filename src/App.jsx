import { useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import SignIn from "./signin/SignIn";

function App() {
  return (
    <div className="wrapper">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
