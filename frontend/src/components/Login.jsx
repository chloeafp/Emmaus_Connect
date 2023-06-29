import React, { useState } from "react";
import Logo from "../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Mot de passe:", password);
  };


  return (
    <div class="h-screen flex items-center justify-center">
      {/* conteneur global */}

      <div className="bg-[#F9F9F9] p-2 w-3/4 h-2/3 flex justify-center">
        {/* conteneur de l'élément central */}

    

          <div className="w-[55%] my-auto" >
          <div className="flex justify-center ">
              <img src={Logo} alt="le Logo" />
            </div>
          <div className="">
         

            <div className="my-7 font-bold font-poppins flex justify-center text-xl">
              Se connecter à votre compte
            </div>

            <form>
              <div className="flex justify-center">
                <input
                  class="my-4 appearance-none border-2 border-gray-200 rounded w-4/5 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-[#00ACB0]"
                  id="inline-full-email"
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex justify-center">
                <input
                  class="my-4 appearance-none border-2 border-gray-200 rounded w-4/5 py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-[#00ACB0]"
                  id="inline-password"
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <div className="flex justify-center">
                  <button
                    class="my-4  shadow bg-[#00ACB0] w-4/5 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded  "
                    type="button" onClick={handleLogin}
                  >
                    Se connecter
                  </button>
                </div>
              </div>
            </form>
           </div> 
          </div>

          {/* conteneur de la partie droite */}
          <div className="bg-[#00ACB0] text-white flex flex-col justify-center items-center w-[45%] text-xl">
            <div right login text>
              Bienvenue sur votre espace
            </div>
            <div className="font-bold mb-[4vh]">EMMAÜS CONNECT</div>
            <div className="font-bold mt-[4vh]">
              Vous n'avez pas de compte ?
            </div>
            <div>
              <p>Contactez le référent</p> <p>de votre lieu de vente.</p>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Login;
