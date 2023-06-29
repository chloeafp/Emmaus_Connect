import React from 'react';
import { Routes, Route } from "react-router-dom";
import NouveauTel from '../components/formulairePhone/NouveauTel';

const Router = () => {
    return (
        <Routes>
            <Route path="/ajout" element={<NouveauTel />} />
        </Routes>
    );
};

export default Router;