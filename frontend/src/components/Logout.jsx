import React from "react";
import Logo from "../assets/logo-200.png";
import { useNavigate } from "react-router-dom";



const Logout = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/smartphone");
  };

  const handleLogout = () => {
    navigate("/");
  };


  return (
    <div className="h-screen flex items-center justify-center">
      {/* conteneur global */}
   
      <div className="bg-[#F9F9F9] p-2 w-3/4 h-2/3 flex justify-center">
        {/* conteneur de l'élément central */}
        <div className="w-[55%] my-auto">
          <div className="flex justify-center ">
            <img src={Logo} alt="le Logo" />
          </div>
          <div className="">
            <div className="my-7 font-bold font-poppins text-center flex justify-center text-xl">
              Se déconnecter et revenir à la page de connexion ?
            </div>
            <div>
              <div className="flex justify-center">
                <button
                  className="my-4  shadow bg-red-600 w-4/5 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded  "
                  type="button"
                  onClick={handleLogout}
                >
                  Se déconnecter
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  className="my-4  shadow bg-[#00ACB0] w-4/5 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded  "
                  type="button"
                  onClick={handleLogin}
                >
                  Rester connecté
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
