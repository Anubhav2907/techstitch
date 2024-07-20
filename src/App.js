import React from "react";
import Home from "./Pages/Home";
import Support from "./Pages/Support";
import CreateRequest from "./Pages/CreateRequest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/createrequest" element={<CreateRequest />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
