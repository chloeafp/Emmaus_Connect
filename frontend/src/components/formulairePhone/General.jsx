import React, { useContext, useState } from "react";


const General = ({ data, setData, setPage }) => {
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
        setData({
            ...data,
            marque: phone.marque,
            année: phone.année,
            modèle: phone.modèle,
            chargeur: phone.chargeur,
        })
        setPage("Technique")
    }

    return (
        <div className="flex-col mx-[10%] ">
            <div className="text-[#00b3b6] font-bold  flex justify-between mt-6 bg-[#d9d9d9] p-2">
                <div >Informations générales</div>
                <div> 1/3</div>
            </div>
            <div className="mt-8">
                Renseignez les champ suivants :

            </div>
            <div>
                <form
                    className="mt-6 flex flex-col px-3 "
                    onSubmit={savePhone}

                >
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label className=" flex flex-col">
                                Marque :
                                <input
                                    className=" bg-white border-solid border-2 text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    type="text"
                                    name="marque"
                                    placeholder="Marque"
                                    value={phone.marque}
                                    onChange={handleInput}
                                >
                                </input>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>
                            <label className=" flex flex-col">
                                Année de sortie :
                                <input
                                    className=" bg-white border-solid border-2 text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    type="text"
                                    name="année"
                                    placeholder="Année"
                                    value={phone.année}
                                    onChange={handleInput}
                                >
                                </input>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>
                        </div>
                        <div className="flex-col">
                            <label className=" flex flex-col">
                                Modèle :
                                <input
                                    className=" bg-white border-solid border-2 text-black w-full h-10 px-4 py-2 rounded-md mb-4"
                                    type="text"
                                    name="modèle"
                                    placeholder="modèle"
                                    value={phone.modèle}
                                    onChange={handleInput}
                                >
                                </input>
                                <span className="text-[#e52460] pb-3">{error}</span>
                            </label>
                            <label className=" flex justify-between">
                                <div>  Chargeur :</div>

                                <input
                                    className=" bg-white border-solid border-2 text-black flex items-center "
                                    type="checkbox"
                                    name="chargeur"


                                    onClick={handleClick}
                                >

                                </input>





                            </label>
                        </div>
                    </div>
                    <label className=" flex flex-col">
                        Ajouter une image :
                        <input
                            className=" bg-white text-black  w-full h-10 px-4 py-2 rounded-md mb-4"
                            type="file"
                            name="modèle"
                            placeholder="Lien de la vidéo"


                        >
                        </input>
                        <span className="text-[#e52460] pb-3">{error}</span>
                    </label>


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

export default General;