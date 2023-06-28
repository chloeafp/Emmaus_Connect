import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo-200.png'
import {BsPersonCircle} from 'react-icons/bs';
import BurgerMenu from './MenuBurger';

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center h-24 bg-[#F9F9F9] px-6 shadow-[0px_1px_5px_2px_#00000024]'>
             <Link to="/">
            <img className="w-48" src={logo} alt="Logo Emmaus Connect" />
          </Link>
          <ul className="flex items-center gap-24">
    
        <li className="text-l hidden lg:block tracking-wide hover:text-[#E52460] transition">
          <NavLink to="">Ajouter un téléphone</NavLink>
        </li>
        <li className="text-l hidden lg:block tracking-wide hover:text-[#E52460] transition">
          <NavLink to="/smartphone">Base de données</NavLink>
        </li>
        <li className="text-l hidden lg:block tracking-wide hover:text-[#E52460] transition focus:font-bold">
          <NavLink to="">FAQ</NavLink>
        </li>
      </ul>
      <div className='flex items-center gap-2 '>
        <BsPersonCircle className="text-[#E52460] text-3xl hidden lg:block" />
        <p className='hidden lg:block'>Profile</p>
        <BurgerMenu className="block md:hidden" />
      </div>
        </nav>
    );
};

export default NavBar;