import React from 'react';
import SearchBar from './SearchBar';
import Checkbox from './Checkbox';

const Menu_filtre = () => {
    const category = [
        {name: "1 - HC"},
        {name: "2 - C"},
        {name: "3 - B"},
        {name: "4 - A"},
        {name: "5 - Premium"}
    ]
    const etat = [
        {name: "DEEE"},
        {name: "Réparable"},
        {name: "Bloqué"},
        {name: "Reconditionnable"},
        {name: "Reconditionné"}
    ]
    return (
        <div className='w-1/3 pt-10 px-3'>
            <SearchBar />
            <h2 className='pb-6 font-bold text-center'>Catégorie</h2>
            {category.map((el)  => {
                return (
                    <Checkbox name={el.name}/>
                )
                
            })}
            

            <h2 className='py-6 font-bold text-center'>Etat</h2>
            {etat.map((el)  => {
                return (
                    <Checkbox name={el.name}/>
                )
                
            })}
            
        </div>
    );
};

export default Menu_filtre;