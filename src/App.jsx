import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import DetailSignUp from "./pages/DetailSignUp";
import DashBoard from "./pages/Dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/main" element={<DashBoard />}></Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up/detail" element={<DetailSignUp />} />
      </Routes>
    </>
  );
}

export default App;
