import React from 'react';
import ListeSmartphone from '../components/liste_smartphone/ListeSmartphone';
import { Routes, Route} from "react-router-dom";

const Router = () => {
    return (
        <Routes>
             <Route path="/smartphone" element={<ListeSmartphone />} />
        </Routes>
    );
};

export default Router;