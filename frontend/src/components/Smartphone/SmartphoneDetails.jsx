import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import SmartphoneContext from "../contexts/SmartphoneContext";

const SmartphoneDetails = () => {
  const { smartphoneData } = useContext(SmartphoneContext);
  const params = useParams();

  if (!smartphoneData || !smartphoneData[params.id]) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Information du téléphone</h2>
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
