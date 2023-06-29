import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Contact = () => {

const [isClicked, setIsClicked] = useState(false);

const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      {isClicked ? (
         <div className="h-[60vh] flex items-center justify-center">
         <div className="bg-[#E52460] flex flex-col items-center justify-center px-8 max-w-md text-white rounded-[31px]">
           <p className="pt-8 pb-8 text-2xl font-medium">
             Merci pour votre message !
           </p>
           <p className="pb-16 text-center text-lg ">
             Notre équipe technique y répondra dans les meilleurs délais.
           </p>
           <div className="flex justify-center">
             <button
               type="button"
               onClick={() => navigate("/faq")}
               className="border hover:bg-white hover:text-[#E52460] tracking-wide rounded-xl py-2 px-3 text-sm md:px-6  md:text-lg transition"
             >
               Retour
             </button>
           </div>
         </div>
       </div>
     ) : (
      <section>
        <div className="px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl font-extrabold text-center">
            Support technique
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
          Vous avez un problème technique ? Vous souhaitez envoyer des commentaires sur une fonctionnalité bêta ? Envoyez-nous un message.
          </p>
          <form className="space-y-8" onSubmit={()=> setIsClicked(!isClicked)}>
            <div>
              <label for="email" className="block mb-2 text-sm font-medium ">
                Votre email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm  border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="name@emmaus.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Quelle est votre problématique"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Votre message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900rounded-lg shadow-sm border rounded-lg border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Laisser un message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#e52460] hover:bg-[#bb1e50] text-white py-2 px-6 text-lg rounded-3xl"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      )}
    </div>
    
  );
};

export default Contact;
