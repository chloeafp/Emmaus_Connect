
import React, { useContext, useState  } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Menu_filtre from "../menu_filtrage/MenuFiltre";
import SmartphoneContext from "../contexts/SmartphoneContext";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const ListeSmartphone = () => {
  const { smartphoneData } = useContext(SmartphoneContext);
  const [search, setSearch] = useState("");
  const [filterArr, setFilterArr] = useState([]);
  const navigate = useNavigate();

  return (

   <>
     <NavBar />
    <div className="flex justify-between max-w-screen-2xl m-auto gap-10">
      <Menu_filtre 
      search={search}
      setSearch={setSearch}
      filterArr={filterArr}
      setFilterArr={setFilterArr}
      className="w-1/3" />
      <div className="flex flex-col gap-12 w-3/4 mx-3">

        <div className="flex justify-between items-center">
          <h2 className="mb-4 text-4xl font-extrabold text-center">Base de données</h2>
          <div className="flex justify-around gap-10">
            <button className="bg-[#e52460] hover:bg-[#bb1e50] text-white font-bold py-2 px-4 rounded-3xl">
              Exporter un fichier
            </button>
            <button onClick={() => navigate("/import_file")} className="bg-[#00b3b6] hover:bg-[#068284] text-white font-bold py-2 px-4 rounded-3xl">
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
                  <tr className="even:bg-gray-50 odd:bg-white font-light " key={phone.modele}>
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
