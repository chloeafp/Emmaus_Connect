import React, { useRef, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import axios from "axios";
import SmartphoneContext from "./contexts/SmartphoneContext";

const ImportFile = () => {
  const [file, setFile] = useState([]);

  const inputRef = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("csv", inputRef.current.files[0]);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/import`, formData)
      .then((res) => {
      setFile(res.data)
    }
      )
      .catch((err) => console.error(err));
  };

  console.log(file);

  return (
    <div>
      <NavBar />
      <section className="px-4 mx-auto max-w-screen-md">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-center ">
              Importer un ficher csv
            </h2>
            <p className="text-center text-medium text-gray-600 mt-9">
              Vous n'êtes pas sûr de la démarche à suivre ? Visitez la{" "}
              <span className="font-medium text-[#E52460] transition-all duration-200 hover:text-[#bb1e50] focus:text-[#bb1e50] hover:underline">
                <NavLink to="/faq">FAQ</NavLink>
              </span>
              .
            </p>
          </div>
          <form enctype="multipart/form-data" onSubmit={handleOnSubmit}>
            <div class="flex items-center justify-center w-full my-12">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500">fichier .csv uniquement</p>
                </div>
                <input
                  id="dropzone-file"
                  name="csv"
                  type="file"
                  accept=".csv"
                  ref={inputRef}
                />
              </label>
            </div>
            {file.length === 0 ? (
              <button
                type="submit"
                className="bg-[#e52460] hover:bg-[#bb1e50] text-white py-2 px-6 text-lg rounded-3xl"
              >
                Importer
              </button>
            ) : (
              <div className="text-center text-2xl font-bold text-[#e52460]">
                Fichier importé !
              </div>
            )}
          </form>
        </div>

        {file.length > 0 && (
          <>
            <p className="text-center text-medium text-gray-600 mt-3">
              Vous avez importé {file.length} nouveaux téléphones
            </p>

            <table className="w-full mt-5">
              <thead className="text-center text-gray-900 bg-[#f4f3f3] h-10">
                <tr>
                  <th>Marque</th>
                  <th>Modèle</th>
                  <th>Catégorie</th>
                </tr>
              </thead>
              <tbody>
                {file.map((cell) => {
                    return (
                        <tr className="even:bg-gray-50 text-center odd:bg-white font-light " key={cell.id}>
                        <td>{cell.marque}</td>
                        <td>{cell.modele}</td>
                        <td>{cell.categorie_prix}</td>
                        </tr>
                    );
                    })}

              </tbody>
            </table>
          </>
        )}
      </section>
    </div>
  );
};

export default ImportFile;
