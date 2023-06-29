import React from 'react';
import SearchBar from './SearchBar';
import Checkbox from './Checkbox';

const Menu_filtre = ({search, setSearch, filterArr, setFilterArr}) => {
    const category = [
        {name: "1 - HC", filterFunc: (phone) => phone.categorie_prix === 1},
        {name: "2 - C", filterFunc: (phone) => phone.categorie_prix === 2},
        {name: "3 - B", filterFunc: (phone) => phone.categorie_prix === 3},
        {name: "4 - A", filterFunc: (phone) => phone.categorie_prix === 4},
        {name: "5 - Premium", filterFunc: (phone) => phone.categorie_prix === 5}
    ]
    const etat = [
        {name: "DEEE", filterFunc: (phone) => phone.etat === "DEEE"},
        {name: "Réparable",filterFunc: (phone) => phone.etat === "reparable"},
        {name: "Bloqué",filterFunc: (phone) => phone.etat === "bloque"},
        {name: "Reconditionnable",filterFunc: (phone) => phone.etat === "reconditionnable"},
        {name: "Reconditionné",filterFunc: (phone) => phone.etat === "reconditionne"}
    ]
    return (
        <div className='w-1/3 pt-10 px-3'>
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
            <h2 className='pb-6 font-bold text-center'>Catégorie</h2>
            {category.map((el)  => {
                return (
                    <Checkbox name={el.name}
                    filterArr={filterArr}
                    setFilterArr={setFilterArr}
                    filterFunc={el.filterFunc}
                    />
                )
                
            })}
            

            <h2 className='py-6 font-bold text-center'>Etat</h2>
            {etat.map((el)  => {
                return (
                    <Checkbox name={el.name}
                    filterArr={filterArr}
                    setFilterArr={setFilterArr}
                    filterFunc={el.filterFunc}/>
                )
                
            })}
            
        </div>
    );
};

export default Menu_filtre;