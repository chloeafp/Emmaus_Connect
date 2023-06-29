import React, { useState } from 'react';
import NavBar from "../NavBar/NavBar"
import General from './General'
import Technique from './Technique'
import Aspect from './Aspect'
import RecapPhone from './RecapPhone';


const NouveauTel = () => {
    const [data, setData] = useState({
        marque: "", annee: "", marque: "", chargeur: "", ram: "",
        stockage: "",
        etat: "",
        ecran: "",
        reseau: "",
        systeme_exploitation: "",
        url: ""
    })
    const [page, setPage] = useState("General")


    return (
        <div>
            <NavBar />
            {page === "General" && <General data={data} setData={setData} setPage={setPage} />}
            {page === "Technique" && <Technique data={data} setData={setData} setPage={setPage} />}
            {page === "Aspect" && <Aspect data={data} setData={setData} setPage={setPage} />}
            {page == "Smartphone" && <RecapPhone data={data} setData={setData} setPage={setPage} />}
        </div>
    );
};

export default NouveauTel;