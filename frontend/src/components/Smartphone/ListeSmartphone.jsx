import React, { useContext, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import Menu_filtre from "../menu_filtrage/MenuFiltre";
import SmartphoneContext from "../contexts/SmartphoneContext";
import { Link } from "react-router-dom";

const ListeSmartphone = () => {
  const { smartphoneData } = useContext(SmartphoneContext);
  const [search, setSearch] = useState("");
  const [filterArr, setFilterArr] = useState([]);

  console.log(smartphoneData);

  return (
    <div className="flex justify-between">
      <Menu_filtre 
      search={search}
      setSearch={setSearch}
      filterArr={filterArr}
      setFilterArr={setFilterArr}
      className="w-1/3" />
      <div className="pt-10 flex flex-col gap-10  w-2/3 mx-3">
        <div className="flex justify-between items-center">
          <p className="text-black font-bold">Base de données</p>
          <div className="flex justify-around gap-10">
            <button className="bg-[#e52460] hover:bg-[#e698b1] text-white font-bold py-2 px-4 rounded-3xl">
              Exporter un fichier
            </button>
            <button className="bg-[#00b3b6] hover:bg-[#068284] text-white font-bold py-2 px-4 rounded-3xl">
              Importer un fichier
            </button>
          </div>
        </div>
        <table className="table-auto">
          <thead className="text-left bg-[#f9c838]">
            <tr>
              <th>Marque</th>
              <th>Modèle</th>
              <th>Catégorie</th>
              <th>Date d'ajout</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {smartphoneData &&
              smartphoneData
              .filter((phone) => {
                if (filterArr.length) {
                  for (let i = 0; i < filterArr.length; i += 1) {
                    if (filterArr[i].filterFunc(phone)) {
                      return true;
                    }
                  }
                  return false;
                }
                return true;
              })
              .filter((phone)=>
              search
                  ? phone.marque.toLowerCase().includes(search.toLowerCase()) ||
                    phone.modele.toLowerCase().includes(search.toLowerCase())
                  : true
              )
              .map((phone) => {
                return (
                  <tr className="even:bg-gray-50 odd:bg-white font-light">
                    <td>{phone.marque}</td>
                    <td>{phone.modele}</td>
                    <td>{phone.categorie_prix}</td>
                    <td>
                      {phone.date_ajout
                        .split("")
                        .slice(0, 10)
                        .join("")
                        .split("-")
                        .reverse()
                        .join("/")}
                    </td>
                    
                      <td>
                      <Link to={`/smartphone_details/${phone.id-1}`}>
                        <AiFillEye />
                        </Link>
                      </td>
                    
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListeSmartphone;
