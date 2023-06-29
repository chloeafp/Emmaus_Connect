import React, { useContext } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Menu_filtre from "../menu_filtrage/MenuFiltre";
import SmartphoneContext from "../contexts/SmartphoneContext";
import NavBar from "../navbar/NavBar";
import { Link } from "react-router-dom";

const ListeSmartphone = () => {
  const { smartphoneData } = useContext(SmartphoneContext);

  return (
    <>
     <NavBar />
    <div className="flex justify-between max-w-screen-2xl m-auto gap-10">
      <Menu_filtre />
      <div className="pt-10 flex flex-col gap-12 w-3/4 mx-3">
        <div className="flex justify-between items-center">
          <p className="text-black text-xl">Base de données</p>
          <div className="flex justify-around gap-10">
            <button className="bg-[#e52460] hover:bg-[#bb1e50] text-white font-bold py-2 px-4 rounded-3xl">
              Exporter un fichier
            </button>
            <button className="bg-[#00b3b6] hover:bg-[#068284] text-white font-bold py-2 px-4 rounded-3xl">
              Importer un fichier
            </button>
          </div>
        </div>
        <table className="table-auto ">
          <thead className="text-left bg-[#f9c838] h-10">
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
              smartphoneData.map((phone) => {
                return (
                  <tr className="even:bg-gray-50 odd:bg-white font-light hover:bg-[#F9F9F9] transition p-6 h-10 hover:font-medium">
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
                      <Link to={`/smartphone_details/${phone.id - 1}`}>
                        <AiOutlineInfoCircle className="text-2xl hover:text-[#e52460] transition hover:scale-110"/>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default ListeSmartphone;
