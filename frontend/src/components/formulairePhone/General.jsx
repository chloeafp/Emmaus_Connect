import React, { useContext, useState, useRef } from "react";
import axios from 'axios'


const General = ({ data, setData, setPage }) => {
    const inputRef = useRef(null)
    const [phone, setPhone] = useState({
        marque: "",
        année: null,
        modèle: "",
        chargeur: false,

    });
    const [error, setError] = useState("")
    const handleInput = (e) => {
        e.persist();
        setPhone({ ...phone, [e.target.name]: e.target.value });
        console.warn(phone)

    }
    const handleClick = () => {


        setPhone({ ...phone, chargeur: !phone.chargeur });
        console.warn(phone)
    }

    const savePhone = (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.warn(inputRef.current.files[0])
        formData.append("avatar", inputRef.current.files[0]);
        setData({
            ...data,
            marque: phone.marque,
            année: phone.année,
            modèle: phone.modèle,
            chargeur: phone.chargeur,
            avatar: inputRef.current.files[0]
        })

        inputRef.current.files[0] && axios.post("http://localhost:5002/api/avatar", formData)
        setPage("Technique")
    }

    return (
        <div className="flex-col mx-[10%] mt-[5%]">
            <div className="text-[#00b3b6] font-bold  flex  flex-end mt-6 bg-[#fcfcfc] p-2 w-full text-xl">
                <div className="text-[#00b3b6]  relative text-center w-full ">Informations générales</div>
                <div> 1/3</div>
            </div>
            <div className="mt-8 p-3 font-semibold">
                Renseignez les champ suivants :

            </div>
            <div>
                <form
                    encType="multipart/form-data"
                    className="mt-6 flex flex-col px-3 "
                    onSubmit={savePhone}

                >
                    <div className="flex justify-between gap-6">
                        <div className="flex flex-col w-1/2 bg-[#fcfcfc] p-3">
                            <label className=" flex flex-col">
                                Marque :
                                <input
                                    className="border-black bg-white border-solid border-2 text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    type="text"
                                    name="marque"

                                    value={phone.marque}
                                    onChange={handleInput}
                                >
                                </input>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>
                            <label className=" flex flex-col">
                                Année de sortie :
                                <input
                                    className=" bg-white  border-black border-solid border-2 text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    type="text"
                                    name="année"

                                    value={phone.année}
                                    onChange={handleInput}
                                >
                                </input>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>
                            <label className=" flex flex-col">
                                Ajouter une image :
                                <input
                                    className=" bg-white text-black border-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    type="file"
                                    name="image"
                                    ref={inputRef}



                                >
                                </input>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>
                        </div>
                        <div className="flex-col w-1/2 bg-[#fcfcfc] p-3">
                            <label className=" flex flex-col">
                                Modèle :
                                <input
                                    className=" bg-white border-solid border-black border-2 text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    type="text"
                                    name="modèle"

                                    value={phone.modèle}
                                    onChange={handleInput}
                                >
                                </input>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>
                            <label className=" flex justify-between">
                                <div>  Chargeur :</div>

                                <input
                                    className=" bg-white border-solid border-2 border-black text-black flex items-center "
                                    type="checkbox"
                                    name="chargeur"


                                    onClick={handleClick}
                                >

                                </input>





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

export default General;