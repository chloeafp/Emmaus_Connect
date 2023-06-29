import React, { useContext } from "react";

import axios from 'axios'
import iphoneTest from "../../assets/iphone-test.png";
import { useNavigate } from "react-router-dom";


const RecapPhone = ({ data, setPage, categ, setCateg }) => {
    const navigate = useNavigate()
    const handlevalid = () => {

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/smartphone`, data)
            .then((res) => { setCateg(res.data.categorie_prix); console.warn(res) })
            .catch((err) => console.warn(err))

    }

    console.warn(data)
    if (!data) {
        return <div>Loading...</div>;
    }
    return (

        <>

            <div className="max-w-screen-2xl m-auto">
                <div className=" bg-[#F9F9F9] m-12">
                    <div className="flex justify-between items-center py-12 px-10">
                        <h2 className="text-3xl">Résumé du téléphone :</h2>
                        <button
                            type="button"
                            onClick={() => setPage("General")}
                            className="bg-[#e52460] hover:bg-[#bb1e50] text-white py-2 px-6 text-lg font-bold rounded-3xl"
                        >
                            Modifier
                        </button>
                    </div>
                    <div className="flex justify-start gap-80 items-center">
                        <table className="text-left px-6 border-separate border-spacing-6 pb-6">
                            <tbody className=" border-spacing-9">
                                <tr className="h-12">
                                    <th>Marque :</th>
                                    <td>{data.marque}</td>
                                </tr>
                                <tr>
                                    <th>Modèle :</th>
                                    <td>{data.modele}</td>
                                </tr>
                                <tr>
                                    <th>Système d'exploitation :</th>
                                    <td>{data.systeme_exploitation}</td>
                                </tr>
                                <tr>
                                    <th>RAM :</th>
                                    <td>{data.ram == 0 ? "moins de 2 " : data.ram} Go</td>
                                </tr>
                                <tr>
                                    <th>Stockage :</th>
                                    <td>{data.stockage == 0 ? "moins de 16 " : data.stockage} Go</td>
                                </tr>
                                <tr>
                                    <th>Taille d'écran :</th>
                                    <td>{data.ecran == 0 ? "moins de 4" : data.ecran} P</td>
                                </tr>
                                <tr>
                                    <th>Réseau :</th>
                                    <td>{data.reseau}</td>
                                </tr>
                                <tr>
                                    <th>Câble et chargeur fournis :</th>
                                    <td>{`${data.chargeur_cable ? "Oui" : "Non"
                                        }`}</td>
                                </tr>
                            </tbody>
                        </table>

                        {!data.url ? <img src={iphoneTest} alt="iphone" className="h-96" /> : <img src={data.url} alt="iphone" className="h-96" />}
                    </div>
                    {categ ?
                        <div className="flex justify-between items-center py-12 px-10">
                            <div>
                                <div className="text-center text-2xl font-bold text-[#e52460] mt-6">
                                    Téléphone importé !
                                </div>
                                <p className="text-center text-medium text-gray-600 mt-3">
                                    Ce téléphone a obtenu {categ}
                                </p>
                            </div>
                            <button

                                className="bg-[#e52460] hover:bg-[#bb1e50] text-white py-2 px-6 text-lg font-bold rounded-3xl"
                                type="button"
                                onClick={() => navigate("/smartphone")}
                            >

                                Retour a l'accueil
                            </button>
                        </div> :
                        <div className="flex justify-end items-center py-12 px-10">

                            <button

                                type="button"
                                onClick={handlevalid}
                                className="bg-[#e52460] hover:bg-[#bb1e50] text-white py-2 px-6 text-lg font-bold rounded-3xl"
                            >
                                Valider
                            </button>
                        </div>}


                </div>
            </div>






        </>

    );
};

export default RecapPhone;
