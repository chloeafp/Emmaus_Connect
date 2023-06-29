import React from "react";
import { Routes, Route } from "react-router-dom";
import ListeSmartphone from "../components/Smartphone/ListeSmartphone";
import NouveauTel from "../components/formulairePhone/NouveauTel";
import Login from "../components/Login";
import FAQ from "../components/FAQ/FAQ";
import SmartphoneDetails from "../components/Smartphone/SmartphoneDetails";
import Contact from "../components/FAQ/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/ajout" element={<NouveauTel />} />
      <Route path="/" element={<Login />} />
      <Route path="/smartphone" element={<ListeSmartphone />} />
      <Route path="/smartphone_details/:id" element={<SmartphoneDetails />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
