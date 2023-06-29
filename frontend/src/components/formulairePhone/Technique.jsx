import React, { useState } from 'react';

const Technique = ({ data, setData, setPage }) => {
    const [phoneTech, setPhoneTech] = useState({
        ram: "", stockage: "", etat: "", ecran: "", reseau: ""
    })
    const [error, setError] = useState("")
    const handleInput = (e) => {

        e.persist()
        setPhoneTech({ ...phoneTech, [e.target.id]: e.target.value });
        console.warn(phoneTech)
    }
    const savePhoneTech = (e) => {
        e.preventDefault();
        setData({
            ...data,
            ram: phoneTech.ram,
            stockage: phoneTech.stockage,
            etat: phoneTech.etat,
            ecran: phoneTech.ecran,
            reseau: phoneTech.reseau,
        })

        setPage("Aspect")
    }
    return (
        <div className="flex-col mx-[10%] ">
            <div className="text-[#00b3b6] font-bold  flex justify-between mt-6 bg-[#d9d9d9] p-2">
                <div >Informations Techniques</div>
                <div> 2/3</div>
            </div>
            <div className="mt-8">
                Renseignez les champ suivants :

            </div>
            <div>
                <form
                    className="mt-6 flex flex-col px-3 "
                    onSubmit={savePhoneTech}

                >
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label className=" flex flex-col">
                                Ram :
                                <select
                                    className=" bg-white border-solid border-2 text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    id="ram"
                                    onChange={handleInput}
                                >
                                    <option value=""></option>
                                    <option value="2-">Moins de 2go</option>
                                    <option value="2">2 go</option>
                                    <option value="4">
                                        3-4 go
                                    </option>
                                    <option value="8">
                                        6-8 go
                                    </option>
                                    <option value="12+">
                                        12 go et plus </option>
                                </select>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>

                            <label className=" flex flex-col">
                                Stockage :
                                <select
                                    className=" bg-white border-solid border-2 text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    id="stockage"
                                    onChange={handleInput}
                                >
                                    <option value=""></option>
                                    <option value="16-">Moins de 16go</option>
                                    <option value="16-32">16-32 go </option>
                                    <option value="64-128">
                                        64-128 go
                                    </option>
                                    <option value="256-512">
                                        256-512 go
                                    </option>
                                    <option value="1000+">
                                        1 to et plus </option>
                                </select>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>
                            <label className=" flex flex-col">
                                Etat :
                                <select
                                    className=" bg-white border-solid border-2 text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    id="etat"
                                    onChange={handleInput}
                                >
                                    <option value=""></option>
                                    <option value="DEEE">DEEE</option>
                                    <option value="Réparable">Réparable</option>
                                    <option value="Bloque">
                                        Bloqué
                                    </option>
                                    <option value="Reconditionable">
                                        Reconditionable
                                    </option>
                                    <option value="Reconditionne">
                                        Reconditionne</option>
                                </select>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>
                        </div>
                        <div className="flex-col">

                            <label className=" flex flex-col">
                                Ecran :
                                <select
                                    className=" bg-white border-solid border-2 text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    id="ecran"
                                    onChange={handleInput}
                                >
                                    <option value=""></option>
                                    <option value="4-">moins de 4 pouces</option>
                                    <option value="4">4 pouces</option>
                                    <option value="5">
                                        5 pouces
                                    </option>
                                    <option value="6">
                                        6 pouces
                                    </option>
                                    <option value="7">
                                        7 pouces ou plus</option>
                                </select>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>
                            <label className=" flex flex-col">
                                Reseau :
                                <select
                                    className=" bg-white border-solid border-2 text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    id="reseau"
                                    onChange={handleInput}
                                >
                                    <option value=""></option>
                                    <option value="2">2G</option>
                                    <option value="3">3G</option>
                                    <option value="4">
                                        4G
                                    </option>
                                    <option value="5">
                                        5G
                                    </option>

                                </select>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>








                        </div>
                    </div>



                    <div className="flex justify-end">

                        <button type="submit" className="bg-[#e52460] text-white rounded-md py-2 px-4 w-1/4 "
                        >
                            Suivant
                        </button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Technique;