import React, { useState, useEffect } from 'react';

const Aspect = ({ data, setData, setPage }) => {
    console.warn(data)
    const [note, setNote] = useState([])
    const [index, setIndex] = useState(0)
    const [avancement, setAvancement] = useState(["Rayures : ", "Chocs : ", "Salissures :", "Recapitulatif de l'état du téléphone :"])
    const [questionTmp, setQuestionTmp] = useState({
        note: null, intitule: ""
    })
    const [resultat, setResultat] = useState(0)
    const handleClick = (e) => {
        e.persist();

        setQuestionTmp({ ...questionTmp, note: e.target.id, intitule: e.target.value })

    }
    const handleNext = () => {


        setNote([...note, questionTmp])
        setIndex(index + 1)



    }
    useEffect(() => {
        let moyenne = 0
        console.warn(note)
        note.map((e) => { moyenne += parseInt(e.note) })
        moyenne = moyenne / note.length
        moyenne = moyenne * (7 / 20)
        let ponderation = 0
        let desc = ""
        if (moyenne === 7) { ponderation = 10; desc = "en excellent état" }
        else if (moyenne >= 6) { ponderation = 5; desc = "en très bon état" }
        else if (moyenne >= 5) { ponderation = 0; desc = "en bon état" }
        else if (moyenne >= 4) { ponderation = -5; desc = "dans un état correct" }
        else if (moyenne >= 3) { ponderation = -10; desc = "légèrement abimé" }
        else if (moyenne >= 2) { ponderation = -50; desc = "abimé" }
        else { ponderation = -100; desc = "très abimé" }
        console.log(desc)
        setData({ ...data, ponderation: ponderation, desc: desc })
        setResultat(moyenne)
    }, [note])
    return (
        <div className="flex-col mx-[10%] mt-[5%] ">
            <div className="text-[#00b3b6] font-bold  flex  flex-end mt-6 bg-[#fcfcfc] p-2 w-full text-xl">
                <div className="text-[#00b3b6]  relative text-center w-full ">Aspect général</div>
                <div> 3/3</div>
            </div>
            <div className="mt-8  font-semibold">{avancement[index]}</div>
            {index < 3 && <div className="flex my-8">
                <button className="hover:bg-[#00b3b6] focus:bg-[#00b3b6] focus:text-white hover:text-white cursor-pointer w-1/4 ml-[20px] border-4 border-[#00b3b6] rounded-md flex justify-center items-center px-4 py-2 bg-[#fcfcfc]"
                    id={20} onClick={handleClick} value="pas du tout">pas du tout </button>
                <button className="  hover:bg-[#00b3b6] focus:bg-[#00b3b6]  focus:text-white hover:text-white cursor-pointer w-1/4 ml-[20px] border-4 border-[#00b3b6] rounded-md flex justify-center items-center px-4 py-2 bg-[#fcfcfc]"
                    id={14} onClick={handleClick} value="un peu">un peu </button>
                <button className=" hover:bg-[#00b3b6]  focus:bg-[#00b3b6] focus:text-white hover:text-white cursor-pointer w-1/4 ml-[20px] border-4 border-[#00b3b6] rounded-md flex justify-center items-center px-4 py-2 bg-[#fcfcfc]"
                    id={7} onClick={handleClick} value="bcp">bcp </button>
                <button className=" hover:bg-[#00b3b6]  focus:bg-[#00b3b6] focus:text-white hover:text-white cursor-pointer w-1/4 ml-[20px] border-4 border-[#00b3b6] rounded-md flex justify-center items-center px-4 py-2 bg-[#fcfcfc]"
                    id={0} onClick={handleClick} value="trop">trop</button>

            </div>}

            {index === 3 && <div className="flex flex-col">

                <div className="mt-8">{note[0].intitule} de rayures, {note[1].intitule} de chocs, {note[2].intitule} de salissures</div>
                <div className="mt-8"> Votre téléphone est : {data.desc}</div>
                <button type="submit" className="mt-8 hover:bg-[#bb1e50] bg-[#e52460] text-white rounded-3xl py-2 px-4 w-1/6 "
                    onClick={setPage("Smartphone")}
                >
                    Valider
                </button>

            </div>}


            {index < 2 && <div className="flex justify-end">

                <button type="submit" className="bg-[#e52460] hover:bg-[#bb1e50] text-white rounded-3xl py-2 px-4 w-1/6"
                    onClick={handleNext}
                >
                    Suivant
                </button>
            </div>}
            {index === 2 && <div className="flex justify-end">

                <button type="submit" className=" hover:bg-[#bb1e50] bg-[#e52460] text-white rounded-3xl py-2 px-4 w-1/6 "
                    onClick={handleNext}
                >
                    terminer
                </button>
            </div>}
        </div>

    );
};

export default Aspect;