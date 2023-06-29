import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SmartphoneContext from "../contexts/SmartphoneContext";
import NavBar from "../NavBar/NavBar";

const SmartphoneDetails = () => {
  const { smartphoneData } = useContext(SmartphoneContext);
  const params = useParams();
  const navigate = useNavigate();

  if (!smartphoneData || !smartphoneData[params.id]) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <NavBar />
      <h2>Information du téléphone</h2>
      <button type="button" onClick={() => navigate("/smartphone")}>Retour</button>
      <table className="text-left ">
        <tbody>
          <tr>
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
            <td>{`${smartphoneData[params.id].chargeur_cable  ? 'Oui' : 'Non'}`}</td> 
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SmartphoneDetails;
