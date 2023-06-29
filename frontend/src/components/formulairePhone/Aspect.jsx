import React, { useState, useEffect } from 'react';

const Aspect = ({ data, setData, page }) => {

    const [note, setNote] = useState([])
    const [index, setIndex] = useState(0)
    const [avancement, setAvancement] = useState(["Rayures : ", "Chocs : ", "Salissures :", "Recap :"])
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
        moyenne = moyenne * 7 / note.length

        setResultat(moyenne)
    }, [note])
    return (
        <div className="flex-col mx-[10%] ">
            <div className="text-[#00b3b6] font-bold  flex justify-between mt-6 bg-[#d9d9d9] p-2">
                <div >Aspect général</div>
                <div> 3/3</div>
            </div>
            <div className="my-8">{avancement[index]}</div>
            {index < 3 && <div className="flex my-8">
                <button className="hover:bg-[#e52460] focus:bg-[#e52460] focus:text-white hover:text-white cursor-pointer w-1/4 ml-[20px] border-4 border-[#00b3b6] rounded-md flex justify-center items-center px-4 py-2 bg-[#d9d9d9]"
                    id={1} onClick={handleClick} value="pas du tout">pas du tout </button>
                <button className="  hover:bg-[#e52460] focus:bg-[#e52460]  focus:text-white hover:text-white cursor-pointer w-1/4 ml-[20px] border-4 border-[#00b3b6] rounded-md flex justify-center items-center px-4 py-2 bg-[#d9d9d9]"
                    id={2} onClick={handleClick} value="un peu">un peu </button>
                <button className=" hover:bg-[#e52460]  focus:bg-[#e52460] focus:text-white hover:text-white cursor-pointer w-1/4 ml-[20px] border-4 border-[#00b3b6] rounded-md flex justify-center items-center px-4 py-2 bg-[#d9d9d9]"
                    id={3} onClick={handleClick} value="bcp">bcp </button>
                <button className=" hover:bg-[#e52460]  focus:bg-[#e52460] focus:text-white hover:text-white cursor-pointer w-1/4 ml-[20px] border-4 border-[#00b3b6] rounded-md flex justify-center items-center px-4 py-2 bg-[#d9d9d9]"
                    id={4} onClick={handleClick} value="trop">trop</button>

            </div>}

            {index === 3 && <div className="flex flex-col">

                <div>{note[0].intitule} de rayures, {note[1].intitule} de chocs, {note[2].intitule} de salissures</div>
                <div> moyenne : {resultat}</div>
                <button type="submit" className="bg-[#e52460] hover:bg-[#00b3b6] text-white rounded-md py-2 px-4 w-1/4 "

                >
                    valider la saisie
                </button>

            </div>}


            {index < 2 && <div className="flex justify-end">

                <button type="submit" className="bg-[#e52460] hover:bg-[#00b3b6] text-white rounded-md py-2 px-4 w-1/4 "
                    onClick={handleNext}
                >
                    Suivant
                </button>
            </div>}
            {index === 2 && <div className="flex justify-end">

                <button type="submit" className="bg-[#e52460] hover:bg-[#00b3b6] text-white rounded-md py-2 px-4 w-1/4 "
                    onClick={handleNext}
                >
                    terminer
                </button>
            </div>}
        </div>

    );
};

export default Aspect;