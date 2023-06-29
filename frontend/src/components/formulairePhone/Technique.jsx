import React, { useState } from 'react';

const Technique = ({ data, setData, setPage }) => {

    const [error, setError] = useState("")
    const handleInput = (e) => {

        e.persist()
        setData({ ...data, [e.target.id]: e.target.value });
        console.warn(data)
    }
    const savePhoneTech = (e) => {
        e.preventDefault();


        setPage("Aspect")
    }
    return (
        <div className="flex-col mx-[10%] mt-[5%]">
            <div className="text-[#00b3b6] font-bold  flex  flex-end mt-6 bg-[#fcfcfc] p-2 w-full text-xl">

                <div className="text-[#00b3b6]  relative text-center w-full ">Informations Techniques</div>
                <div className=" "> 2/3</div>

            </div>






            <div className="mt-8 p-3 font-semibold">
                Renseignez les champ suivants :

            </div>
            <div>
                <form
                    className="mt-6 flex flex-col  "
                    onSubmit={savePhoneTech}

                >
                    <div className="flex justify-between gap-6">
                        <div className="flex flex-col w-1/2 bg-[#fcfcfc] p-3">
                            <label className=" flex flex-col ">
                                Ram :
                                <select
                                    className=" bg-white border-solid border-2 border-black text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    id="ram"
                                    onChange={handleInput}
                                >
                                    <option value=""></option>
                                    <option value="moins de 2">Moins de 2go</option>
                                    <option value="2">2 go</option>
                                    <option value="3">3 go</option>
                                    <option value="4">
                                        4 go
                                    </option>
                                    <option value="6">
                                        6 go
                                    </option>
                                    <option value="8">
                                        8 go
                                    </option>
                                    <option value="plus de 12">
                                        12 go et plus </option>
                                </select>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>

                            <label className=" flex flex-col">
                                Stockage :
                                <select
                                    className=" bg-white border-solid border-2 border-black text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    id="stockage"
                                    onChange={handleInput}
                                >
                                    <option value=""></option>
                                    <option value="moins de 16">Moins de 16go</option>
                                    <option value="16">16 go </option>
                                    <option value="32">32 go </option>
                                    <option value="64">
                                        64 go
                                    </option>
                                    <option value="128">
                                        128 go
                                    </option>
                                    <option value="256">
                                        256 go
                                    </option>
                                    <option value="512">
                                        512 go
                                    </option>
                                    <option value="plus de 1000">
                                        1 to et plus </option>
                                </select>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>
                            <label className=" flex flex-col">
                                Etat :
                                <select
                                    className=" bg-white border-solid border-2 border-black text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    id="etat"
                                    onChange={handleInput}
                                >
                                    <option value=""></option>
                                    <option value="DEEE">DEEE</option>
                                    <option value="Reparable">Réparable</option>
                                    <option value="bloque">
                                        Bloqué
                                    </option>
                                    <option value="reconditionable">
                                        Reconditionable
                                    </option>
                                    <option value="reconditionne">
                                        Reconditionne</option>
                                </select>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>
                        </div>
                        <div className="flex-col w-1/2 bg-[#fcfcfc] p-3">

                            <label className=" flex flex-col">
                                Ecran :
                                <select
                                    className=" bg-white border-solid border-2 border-black text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    id="ecran"
                                    onChange={handleInput}
                                >
                                    <option value=""></option>
                                    <option value="moins de 4">moins de 4 pouces</option>
                                    <option value="4">4 pouces</option>
                                    <option value="5">
                                        5 pouces
                                    </option>
                                    <option value="6">
                                        6 pouces
                                    </option>
                                    <option value="plus de 7">
                                        7 pouces ou plus</option>
                                </select>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>
                            <label className=" flex flex-col">
                                Reseau :
                                <select
                                    className=" bg-white border-solid border-2 border-black text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    id="reseau"
                                    onChange={handleInput}
                                >
                                    <option value=""></option>

                                    <option value="<4">3G ou moins</option>
                                    <option value="4G">
                                        4G
                                    </option>
                                    <option value="5G">
                                        5G
                                    </option>

                                </select>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>
                            <label className=" flex flex-col">
                                Système d'exploitation
                                <select
                                    className=" bg-white border-solid border-2 border-black text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    id="systeme_exploitation"
                                    onChange={handleInput}
                                >
                                    <option value=""></option>
                                    <option value="Android">Android </option>
                                    <option value="IOS">IOS</option>
                                </select>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>








                        </div>
                    </div>



                    <div className="flex justify-end">

                        <button type="submit" className=" hover:bg-[#bb1e50] bg-[#e52460] text-white rounded-3xl py-2 px-4 w-1/6 "
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