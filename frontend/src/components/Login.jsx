import React from "react";
import Logo from "../assets/logo.png";

const Login = () => {
  return (
    <div class="h-screen flex items-center justify-center font-sans ">
      {/* conteneur global */}
      <div>
        {/* conteneur de l'élément central */}
        <div className=" flex justify-center ">
          {/* partie gauche */}
          <div className="flex-col ">
            <div left logo>
              <img src={Logo} alt="le Logo" />
            </div>
            <div left text>
              Se connecter à votre compte
            </div>
            <form >
              <div >
                <div >
                  <input
                    class="my-5 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00ACB0]"
                    id="inline-full-email"
                    type="text"
                    value="email"
                  />
                </div>
              </div>
              <div >
                <div >
                  <input
                    class="my-5 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00ACB0]"
                    id="inline-password"
                    type="password"
                    placeholder="Mot de passe"
                  />
                </div>
              </div>

              <div>
              
                <div >
                  <button
                    class=" shadow bg-[#00ACB0]  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
                    type="button"
                  >
                    Se connecter
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* conteneur de la partie droite */}
          <div className="bg-[#00ACB0] text-white  flex flex-col justify-center items-center ">
            <div right login text>
              Bienvenue sur votre espace
            </div>
            <div className="font-bold">EMMAÜS CONNECT</div>
            <div className="font-bold">Vous n'avez pas de compte ?</div>
            <div>Contactez le référent de votre lieu de vente.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
