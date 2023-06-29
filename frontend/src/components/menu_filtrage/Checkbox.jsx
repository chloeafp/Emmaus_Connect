import React, {useEffect, useState} from 'react';

const Checkbox = ({name,  filterArr, setFilterArr, filterFunc}) => {

    const [check, setCheck] = useState(false)

    useEffect(() =>
        {
if (name === "5 - Premium" || name === "2 - C" ||name === "3 - B"||name === "4 - A") {
    setCheck(true)
} 
    },[])

    const filterHandler = () => {      
        let temp = [];
        if (!check) { 
            setCheck(!check)           
          setFilterArr([...filterArr, { name, filterFunc }]);
        } else {
            setCheck(!check)
          temp = filterArr.filter((el) => el.name !== name);
          setFilterArr(temp);
        }        
      };

    return (
        <div className='flex gap-3'>
            <input type="checkbox"
           checked={check}
            onChange={(e) => filterHandler(e)}
            />
            <label htmlFor="">{name}</label>
            
        </div>
    );
};

export default Checkbox;