import React from "react";
import Logo from "../assets/logo.png";

const Login = () => {
  return (
    <div class="h-screen flex items-center justify-center font-sans ">
      {/* conteneur global */}
      <div>
        {/* conteneur de l'élément central */}
        <div className=" flex h-96 ">
          {/* partie gauche */}
          <div className="flex-row w-96 ">
            <div className="flex justify-center my-">
              <img src={Logo} alt="le Logo" />
            </div>
            <div className="my-7 font-bold font-poppins flex justify-center" >
              Se connecter à votre compte
            </div>
            <form >
              
                <div className="flex justify-center" >
                  <input
                    class="my-4 appearance-none border-2 border-gray-200 rounded w-4/5 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-[#00ACB0]"
                    id="inline-full-email"
                    type="text"
                    value="email"
                  />
                </div>
              
              
                <div className="flex justify-center" >
                  <input
                    class="my-4 appearance-none border-2 border-gray-200 rounded w-4/5 py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-[#00ACB0]"
                    id="inline-password"
                    type="password"
                    placeholder="Mot de passe"
                  />
                </div>
            

              <div>
              
                <div className="flex justify-center">
                  <button
                    class="my-4  shadow bg-[#00ACB0] w-4/5 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded  "
                    type="button"
                  >
                    Se connecter
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* conteneur de la partie droite */}
          <div className="bg-[#00ACB0] text-white  flex flex-col justify-center items-center w-64 ">
            <div right login text>
              Bienvenue sur votre espace
            </div>
            <div className="font-bold mb-[4vh]">EMMAÜS CONNECT</div>
            <div className="font-bold mt-[4vh]">Vous n'avez pas de compte ?</div>
            <div><p>Contactez le référent</p> <p>de votre lieu de vente.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
