import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoX } from "react-icons/go";

function BurgerMenu() {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <nav className="lg:hidden">
        {openMenu === false ? (
          <GiHamburgerMenu
            className="text-[#E52460]"
            size={40}
            onClick={() => setOpenMenu(!openMenu)}
          />
        ) : (
          <GoX
            className="text-[#E52460]"
            size={40}
            onClick={() => setOpenMenu(!openMenu)}
          />
        )}
        {openMenu === true && (
          <div className="absolute w-full h-44 py-4 right-0 px-3 bg-[#F9F9F9] shadow-b-[0px_1px_5px_2px_#00000024] top-20 rounded-md transition m-auto">
            <ul>
              <li className="p-2 hover:text-[#E52460] font-medium">
                <NavLink to="/decouvrir">Mon profil</NavLink>
              </li>
              <li className="p-2 hover:text-[#E52460] font-medium">
                <NavLink>Ajouter un téléphone</NavLink>
              </li>
              <li className="p-2 hover:text-[#E52460] font-medium">
                <NavLink to="/admin">Base de données</NavLink>
              </li>
              <li className="p-2 hover:text-[#E52460] font-medium">
                <NavLink to="/admin">FAQ</NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
export default BurgerMenu;
