
import React, {useState, useEffect} from 'react';
import { AiFillEye } from "react-icons/ai";
import axios from 'axios';
import Menu_filtre from "../menu_filtrage/MenuFiltre";

const ListeSmartphone = () => {
const [smartphoneData, setSmartPhoneData] = useState(undefined)

useEffect(()=> {
  axios
  .get(`http://localhost:5002/api/smartphone`)
  .then((response) => setSmartPhoneData(response.data))
  .catch((error) => console.error(error.message));
  
},[])

console.log(smartphoneData);


    return (
    <div className="flex justify-between">
      <Menu_filtre className="w-1/3" />
      <div className="pt-10 flex flex-col gap-10  w-2/3 mx-3">
        <div className="flex justify-between items-center">
          <p className="text-black font-bold">Base de données</p>
          <div className="flex justify-around gap-10">
            <button class="bg-[#e52460] hover:bg-[#e698b1] text-white font-bold py-2 px-4 rounded-3xl">
              Exporter un fichier
            </button>
            <button class="bg-[#00b3b6] hover:bg-[#068284] text-white font-bold py-2 px-4 rounded-3xl">
              Importer un fichier
            </button>
          </div>
        </div>
        <table class="table-auto">
  <thead class="text-left bg-[#f9c838]">
    <tr>
      <th>Marque</th>
      <th>Modèle</th>
      <th>Catégorie</th>
      <th>Date d'ajout</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {smartphoneData && smartphoneData.map((phone)=> {
      return (
        <tr class="even:bg-gray-50 odd:bg-white font-light">
        <td>{phone.marque}</td>
          <td>{phone.modele}</td>      
          <td>{phone.categorie_prix}</td>
          <td>{phone.date_ajout.split("").slice(0, 10).join("").split("-").reverse().join("/")}</td>
          <td><AiFillEye/></td>
        </tr>  
      )
    })}   
  </tbody>
</table>
</div>
        </div>
    );
};

export default ListeSmartphone;
