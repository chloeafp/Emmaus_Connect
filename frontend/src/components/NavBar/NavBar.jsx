import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-200.png";
import { BsPersonCircle } from "react-icons/bs";
import BurgerMenu from "./MenuBurger";
import UserContext from "../contexts/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className="bg-[#F9F9F9] px-6 shadow-[0px_1px_5px_2px_#00000024] w-full mb-20">
      <div className="flex justify-between items-center h-28 max-w-screen-2xl m-auto">
        <Link to="/">
          <img className="w-48" src={logo} alt="Logo Emmaus Connect" />
        </Link>
        <ul className="flex items-center gap-24">
          <li className="text-lg font-light hidden lg:block tracking-wide hover:text-[#E52460] transition">
            <NavLink to="/ajout">Ajouter un téléphone</NavLink>
          </li>
          <li className="text-lg font-light hidden lg:block tracking-wide hover:text-[#E52460] transition">
            <NavLink to="/smartphone">Base de données</NavLink>
          </li>
          <li className="text-lg font-light hidden lg:block tracking-wide hover:text-[#E52460] transition focus:font-bold">
            <NavLink to="/faq">FAQ</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-2 ">
         
          <p className="hidden lg:block text-lg font-light">
            {user && user.prenom}
          </p> 
          <NavLink to="/Logout">
          <BsPersonCircle
            className="text-[#E52460] text-3xl hidden lg:block"
   
          /></NavLink>
          <BurgerMenu className="block md:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
