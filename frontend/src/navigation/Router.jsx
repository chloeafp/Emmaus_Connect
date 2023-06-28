import React from 'react';
import ListeSmartphone from '../components/Smartphone/ListeSmartphone';
import { Routes, Route} from "react-router-dom";
import SmartphoneDetails from '../components/Smartphone/SmartphoneDetails';

const Router = () => {
    return (
        <Routes>
             <Route path="/smartphone" element={<ListeSmartphone />} />
             <Route path="/smartphone_details/:id" element={<SmartphoneDetails />} />

        </Routes>
    );
};

export default Router;