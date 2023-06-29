import React, { useEffect, useState } from 'react';
import NavBar from "../NavBar/NavBar"
import General from './General'
import Technique from './Technique'
import Aspect from './Aspect'
import RecapPhone from './RecapPhone';



const NouveauTel = () => {
    useEffect(() => setPage("General"), [])
    const [categ, setCateg] = useState(undefined)
    const [data, setData] = useState({
        marque: "", annee: "", chargeur_cable: false, ram: "",
        stockage: "",
        etat: "",
        ecran: "",
        reseau: "",
        systeme_exploitation: "",
        image: "",
        point_vente_id: 1
    })
    const [page, setPage] = useState("General")


    return (
        <div>
            <NavBar />
            {page === "General" && <General data={data} setData={setData} setPage={setPage} />}
            {page === "Technique" && <Technique data={data} setData={setData} setPage={setPage} />}
            {page === "Aspect" && <Aspect data={data} setData={setData} setPage={setPage} />}
            {page === "Smartphone" && <RecapPhone data={data} setData={setData} setPage={setPage} categ={categ} setCateg={setCateg} />}

        </div>
    );
};

export default NouveauTel;