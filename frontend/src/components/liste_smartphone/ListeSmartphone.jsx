import React from 'react';
import { AiFillEye } from "react-icons/ai";

const ListeSmartphone = () => {
    return (
        <div className="pt-10 flex flex-col gap-10">
            <div className="flex justify-around items-center">
        <p className='text-black font-bold'>Base de données</p>
        <div className='flex justify-around gap-10'>
        <button class="bg-[#e52460] hover:bg-[#e698b1] text-white font-bold py-2 px-4 rounded-3xl">Exporter un fichier</button>
        <button class="bg-[#00b3b6] hover:bg-[#068284] text-white font-bold py-2 px-4 rounded-3xl">Importer un fichier</button>
        </div>
        </div>
        <table class="table-auto">
  <thead class="text-left bg-[#f9c838]">
    <tr>
      <th>Marque</th>
      <th>Modèle</th>
      <th>Catégorie</th>
      <td>19/02/2023</td>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr class="even:bg-gray-50 odd:bg-white font-light">
    <td>Samsung</td>
      <td>Galaxy Note 12</td>      
      <td>Catégorie</td>
      <td>19/02/2023</td>
      <td><AiFillEye/></td>
    </tr> 
    <tr class="even:bg-gray-200 odd:bg-white font-light">
    <td >Samsung</td>
      <td>Galaxy Note 12</td>      
      <td>Catégorie</td>
      <td>19/02/2023</td>
      <td><AiFillEye/></td>
    </tr>     
  </tbody>
</table>
        </div>
    );
};

export default ListeSmartphone;