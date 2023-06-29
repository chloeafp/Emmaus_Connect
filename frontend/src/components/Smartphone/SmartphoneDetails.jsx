import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import SmartphoneContext from "../contexts/SmartphoneContext";
import iphoneTest from "../../assets/iphone-test.png";

const SmartphoneDetails = () => {
  const { smartphoneData } = useContext(SmartphoneContext);
  const params = useParams();
  const navigate = useNavigate();

  if (!smartphoneData || !smartphoneData[params.id]) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <NavBar />
      <div className="max-w-screen-2xl m-auto">
        <div className=" bg-[#F9F9F9] m-12">
          <div className="flex justify-between items-center py-12 px-10">
            <h2 className="text-3xl">Résumé du téléphone :</h2>
            <button
              type="button"
              onClick={() => navigate("/smartphone")}
              className="bg-[#e52460] hover:bg-[#bb1e50] text-white py-2 px-6 text-lg font-bold rounded-3xl"
            >
              Retour
            </button>
          </div>
          <div className="flex justify-start gap-80 items-center">
            <table className="text-left px-6 border-separate border-spacing-6 pb-6">
              <tbody className=" border-spacing-9">
                <tr className="h-12">
                  <th>Marque :</th>
                  <td>{smartphoneData[params.id].marque}</td>
                </tr>
                <tr>
                  <th>Modèle :</th>
                  <td>{smartphoneData[params.id].modele}</td>
                </tr>
                <tr>
                  <th>Système d'exploitation :</th>
                  <td>{smartphoneData[params.id].systeme_exploitation}</td>
                </tr>
                <tr>
                  <th>RAM :</th>
                  <td>{smartphoneData[params.id].ram}</td>
                </tr>
                <tr>
                  <th>Stockage :</th>
                  <td>{smartphoneData[params.id].stockage}</td>
                </tr>
                <tr>
                  <th>Taille d'écran :</th>
                  <td>{smartphoneData[params.id].ecran}</td>
                </tr>
                <tr>
                  <th>Réseau :</th>
                  <td>{smartphoneData[params.id].reseau}</td>
                </tr>
                <tr>
                  <th>Câble et chargeur fournis :</th>
                  <td>{`${
                    smartphoneData[params.id].chargeur_cable ? "Oui" : "Non"
                  }`}</td>
                </tr>
              </tbody>
            </table>
            <img src={iphoneTest} alt="iphone" className="h-96" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartphoneDetails;
