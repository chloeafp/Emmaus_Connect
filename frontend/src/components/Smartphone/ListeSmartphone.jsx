

import React, { useContext, useState, useEffect  } from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { ImBin } from "react-icons/Im";
import Menu_filtre from "../menu_filtrage/MenuFiltre";
import SmartphoneContext from "../contexts/SmartphoneContext";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import axios from "axios";

const ListeSmartphone = () => {
  const navigate = useNavigate()
  const { smartphoneData } = useContext(SmartphoneContext);
  const { setSmartPhoneData } = useContext(SmartphoneContext);
  const [search, setSearch] = useState("");
  const [filterArr, setFilterArr] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/smartphone/${id}`)
      .then(() => setSmartPhoneData(smartphoneData.filter((el)=> el.id !== id)))
      .catch((error) => console.error(error.message));
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/smartphone`)
      .then((response) => setSmartPhoneData(response.data))
      .catch((error) => console.error(error.message));
  }, []);



  return (
    <>
      <NavBar />
      <div className="flex justify-between max-w-screen-2xl m-auto gap-10">
        <Menu_filtre
          search={search}
          setSearch={setSearch}
          filterArr={filterArr}
          setFilterArr={setFilterArr}
          className="w-1/3"
        />
        <div className="flex flex-col gap-12 w-3/4 mx-3">
          <div className="flex justify-between items-center">
            <h2 className="mb-4 text-4xl font-extrabold text-center">
              Base de données
            </h2>
            <div className="flex justify-around gap-10">
              <button
                onClick={() => navigate("/import_file")}
                className="bg-[#00b3b6] hover:bg-[#068284] text-white font-bold py-2 px-4 rounded-3xl"
              >
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
                <th>Prix</th>
                <th>Date d'ajout</th>
                <th></th>
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
                  .filter((phone) =>
                    search
                      ? phone.marque
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        phone.modele
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      : true
                  )
                  .map((phone) => {
                    return (
                      <tr
                        className="even:bg-gray-50 odd:bg-white font-light"
                        key={phone.id}
                      >
                        <td>{phone.marque}</td>
                        <td>{phone.modele}</td>
                        <td>{phone.categorie_prix}</td>
                        {phone.categorie_prix === 1 && <td>Non vendable</td>}
                        {phone.categorie_prix === 2 && (
                          <td className="text-green-700">90€ - 165€</td>
                        )}
                        {phone.categorie_prix === 3 && (
                          <td className="text-yellow-400">165€ - 255€</td>
                        )}
                        {phone.categorie_prix === 4 && (
                          <td className="text-orange-400">255€ - 375€</td>
                        )}
                        {phone.categorie_prix === 5 && (
                          <td className="text-red-700">375€ et plus</td>
                        )}

                        
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
                      <Link to={`/smartphone_details/${phone.id}`}>
                        <AiOutlineInfoCircle className="text-2xl hover:text-[#e52460] transition hover:scale-110"/>
                      </Link>
                    </td>
                    <td>                      
                        <ImBin className="text-2xl hover:text-[#e52460] transition scale-75 hover:scale-100 cursor-pointer"
                        onClick={()=> handleDelete(phone.id)}/>                     
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
