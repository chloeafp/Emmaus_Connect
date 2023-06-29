import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import BlockFAQ from "./BlockFAQ";


const FAQ = () => {
  const faq = [
    {
      question: "Comment ajouter un nouveau téléphone ?",
      reponse:
        "The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!",
    },
    {
      question: "Comment avoir accès à la base de données ?",
      reponse:
        "The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!",
    },
    {
      question: "Comment importer un ficher csv ?",
      reponse:
        "The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!",
    },
    {
      question:
        "J'ai perdu mon mot de passe / identifiant pour me connecter :(",
      reponse:
        "The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!",
    },
  ];

  return (
    <>
      <NavBar />

      <section className="px-4 mx-auto max-w-screen-md">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-center ">
              FAQ 
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
            Les questions fréquentes :
          </p>
          </div>

          {faq.map((blockFaq) => {
            return (
              <BlockFAQ
                question={blockFaq.question}
                reponse={blockFaq.reponse}
              />
            );
          })}

          <p className="text-center text-gray-600 textbase mt-9">
            Vous n'avez pas trouvé la réponse à votre question ?{" "}
            <span className="font-medium text-[#E52460] transition-all duration-200 hover:text-[#bb1e50] focus:text-[#bb1e50] hover:underline">
             <NavLink to="/contact">Contactez notre support</NavLink> 
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default FAQ;
